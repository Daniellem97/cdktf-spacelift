import { App, TerraformStack } from "cdktf";
import { Space } from "../.gen/providers/spacelift/space/index.js";
import { DataSpaceliftSpaceByPath } from "../.gen/providers/spacelift/data-spacelift-space-by-path/index.js";
import { Construct } from "constructs";
import { SpaceliftProvider } from "../.gen/providers/spacelift/provider/index.js";

export class Infra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // ✅ Register the provider
    new SpaceliftProvider(this, "spacelift", {});

    // ✅ Create root space reference
    const rootSpace = new DataSpaceliftSpaceByPath(this, "root-space", {
      spacePath: "root",
    });

    // ✅ Define the resource with matching construct ID "x"
    const spaceX = new Space(this, "x", {
      name: "x", // Name is optional for import, but helpful
      parentSpaceId: rootSpace.id,
      inheritEntities: true,
    });

    // ✅ Tell CDKTF this maps to an existing resource (Terraform address + real ID)
    spaceX.overrideLogicalId("x-01K0EVTW7HW9M520EMKD7K93HQ");

    // Alternatively, you can use moveToId if dynamically building graph
    // spaceX.moveToId("spacelift_space.existing_target");

    // You can now create stacks or attach policies using this imported space
  }
}

const app = new App();
new Infra(app, "infra");
app.synth();
