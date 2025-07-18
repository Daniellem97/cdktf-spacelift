import { App, TerraformStack, TerraformOutput, TerraformProvider } from "cdktf";
import { Construct } from "constructs";
import { Space } from "../.gen/providers/spacelift/space/index.js";
import { DataSpaceliftSpaceByPath } from "../.gen/providers/spacelift/data-spacelift-space-by-path/index.js";
import { SpaceliftProvider } from "../.gen/providers/spacelift/provider/index.js";

class Infra extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new SpaceliftProvider(this, "spacelift", {});

    const root = new DataSpaceliftSpaceByPath(this, "root", {
      spacePath: "root",
    });

    const imported = new Space(this, "x", {
      name: "x",
      parentSpaceId: root.id,
      inheritEntities: true,
    });

    // ✅ THIS is what marks the resource as "imported"
    imported.overrideLogicalId("x");
    imported.addOverride("import", "x-01K0EVTW7HW9M520EMKD7K93HQ");
  }
}

const app = new App();
new Infra(app, "infra");
app.synth();
