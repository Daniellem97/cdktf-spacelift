// https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/gitlab_webhook_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftGitlabWebhookEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/gitlab_webhook_endpoint#id DataSpaceliftGitlabWebhookEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/gitlab_webhook_endpoint spacelift_gitlab_webhook_endpoint}
*/
export class DataSpaceliftGitlabWebhookEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_gitlab_webhook_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftGitlabWebhookEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftGitlabWebhookEndpoint to import
  * @param importFromId The id of the existing DataSpaceliftGitlabWebhookEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/gitlab_webhook_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftGitlabWebhookEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_gitlab_webhook_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/gitlab_webhook_endpoint spacelift_gitlab_webhook_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftGitlabWebhookEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftGitlabWebhookEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spacelift_gitlab_webhook_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.27.0',
        providerVersionConstraint: '~> 1.27'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // webhook_endpoint - computed: true, optional: false, required: false
  public get webhookEndpoint() {
    return this.getStringAttribute('webhook_endpoint');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
