import { App, TerraformStack } from "cdktf";
import { Space } from "../.gen/providers/spacelift/space/index.js";
import { DataSpaceliftSpaceByPath } from "../.gen/providers/spacelift/data-spacelift-space-by-path/index.js";
import { Construct } from "constructs";
import { SPACE_IMPORT_MAP } from "./space-import-map.js";
import { ManagementMiscStack } from "./stacks/management-misc-stack.js";
import { SpaceliftProvider } from "../.gen/providers/spacelift/provider/index.js";




class Infra extends TerraformStack {
  public rootSpace: DataSpaceliftSpaceByPath;

constructor(scope: Construct, id: string) {
  super(scope, id);

  // ✅ Required: register the provider!
  new SpaceliftProvider(this, "spacelift", {});

  this.rootSpace = new DataSpaceliftSpaceByPath(this, "root-space", {
    spacePath: "root",
  });

  this.moveSpaceIds();
  this.setupXStacks();
}

private moveSpaceIds(): void {
  Object.entries(SPACE_IMPORT_MAP).forEach(([spaceId, { spacePath, targetId }]) => {
    // Will be: new Space(this, "x", {...})
    const space = new Space(this, spaceId, {
      name: spacePath,
      parentSpaceId: this.rootSpace.id,
      inheritEntities: true,
    });

    space.moveToId(`spacelift_space.${targetId}`);
  });
}

private setupXStacks(): void {
  // 👇 Also uses "x" as construct ID, triggering the conflict
  const xSpace = new DataSpaceliftSpaceByPath(this, "x", {
    spacePath: "root/x",
  });

  new ManagementMiscStack(this, "x-stack", xSpace);
}

const app = new App();
new Infra(app, "infra");
app.synth();
