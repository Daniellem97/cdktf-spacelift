import { App, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { SpaceliftProvider } from "../.gen/providers/spacelift/provider/index.js";
import { DataSpaceliftSpaceByPath } from "../.gen/providers/spacelift/data-spacelift-space-by-path/index.js";
import { Space } from "../.gen/providers/spacelift/space/index.js";

import { ManagementMiscStack } from "./stacks/management-misc-stack.js";
import { SPACE_IMPORT_MAP } from "./space-import-map.js";

class Infra extends TerraformStack {
  public rootSpace: DataSpaceliftSpaceByPath;
  private movedSpaces: Record<string, Space> = {};

  constructor(scope: Construct, id: string) {
    super(scope, id);

    new SpaceliftProvider(this, "spacelift", {});

    this.rootSpace = new DataSpaceliftSpaceByPath(this, "root-space", {
      spacePath: "root",
    });

    this.moveSpaceIds();
    this.setupXStacks();
  }

  private moveSpaceIds(): void {
    Object.entries(SPACE_IMPORT_MAP).forEach(([key, { spacePath, targetId }]) => {
      const space = new Space(this, key, {
        name: spacePath,
        parentSpaceId: this.rootSpace.id,
        inheritEntities: true,
      });

      space.moveToId(`spacelift_space.${targetId}`);

      this.movedSpaces[spacePath] = space;
    });
  }

  private setupXStacks(): void {
    const xSpace = this.movedSpaces["root/x"];

    new ManagementMiscStack(this, "x-stack", xSpace);
  }
}

const app = new App();
new Infra(app, "infra");
app.synth();
