import { App, TerraformStack, TerraformOutput, TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import { Space } from "../.gen/providers/spacelift/space/index.js";
import { DataSpaceliftSpaceByPath } from "../.gen/providers/spacelift/data-spacelift-space-by-path/index.js";
import { SpaceliftProvider } from "../.gen/providers/spacelift/provider/index.js";

class ImportStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new SpaceliftProvider(this, "spacelift", {});

    // 1. Generate the import config
    Space.generateConfigForImport(this, "x", "x-01K0EVTW7HW9M520EMKD7K93HQ");

    // 2. Define the resource to satisfy the import block
    new Space(this, "x", {
      name: "x", // use correct name
      parentSpaceId: "root", // or correct parent
      inheritEntities: true,
    });
  }
}

const app = new App();
new ImportStack(app, "import-x");
app.synth();
