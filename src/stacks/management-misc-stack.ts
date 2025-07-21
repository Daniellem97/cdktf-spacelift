import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { Space } from "../../.gen/providers/spacelift/space/index.js";

export class ManagementMiscStack extends TerraformStack {
  constructor(scope: Construct, id: string, space: Space) {
    super(scope, id);

    // Use space.id, space.name, etc.
  }
}
