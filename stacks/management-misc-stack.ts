import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import { DataSpaceliftSpaceByPath } from "@cdktf/provider-spacelift";

export class ManagementMiscStack extends TerraformStack {
  constructor(scope: Construct, id: string, space: DataSpaceliftSpaceByPath) {
    super(scope, id);

    // Add example resources here
    // You can use the space.id or space.path to configure resources scoped to the space
  }
}
