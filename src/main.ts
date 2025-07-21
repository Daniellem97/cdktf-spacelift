import { App, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { SpaceliftProvider } from "../.gen/providers/spacelift/provider/index.js";
import { DataSpaceliftSpaceByPath } from "../.gen/providers/spacelift/data-spacelift-space-by-path/index.js";
import { Space } from "../.gen/providers/spacelift/space/index.js";

import { ManagementMiscStack } from "./stacks/management-misc-stack.js";
import { SPACE_IMPORT_MAP } from "./space-import-map.js";

class ImportStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new SpaceliftProvider(this, "spacelift", {});

    const importedSpace = new Space(this, "x", {
      // Do NOT set other config — we want to match existing!
    });

    // ✅ This tells Terraform to import the existing resource into state
    importedSpace.importFrom("x-01K0EVTW7HW9M520EMKD7K93HQ");
  }
}

const app = new App();
new ImportStack(app, "import-x");
app.synth();
