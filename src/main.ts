import { App, TerraformStack } from "cdktf";
import { Space } from "../.gen/providers/spacelift/space/index.js";
import { DataSpaceliftSpaceByPath } from "../.gen/providers/spacelift/data-spacelift-space-by-path/index.js";
import { Construct } from "constructs";
import { SpaceliftProvider } from "../.gen/providers/spacelift/provider/index.js";

export class Infra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // ✅ Register provider
    new SpaceliftProvider(this, "spacelift", {});

    // ✅ Look up the existing root space
    const rootSpace = new DataSpaceliftSpaceByPath(this, "root-space", {
      spacePath: "root",
    });

    // ✅ Define a construct with ID "x" (can be anything)
    const existingXSpace = new Space(this, "x", {
      name: "x",
      parentSpaceId: rootSpace.id,
      inheritEntities: true,
    });

    // ✅ Instruct CDKTF not to create but to manage an existing resource
    existingXSpace.moveToId("x-01K0EVTW7HW9M520EMKD7K93HQ");
  }
}

const app = new App();
new Infra(app, "infra");
app.synth();
