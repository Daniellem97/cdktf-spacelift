// https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/bitbucket_datacenter_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftBitbucketDatacenterIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bitbucket Datacenter integration id. If not provided, the default integration will be returned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/bitbucket_datacenter_integration#id DataSpaceliftBitbucketDatacenterIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/bitbucket_datacenter_integration spacelift_bitbucket_datacenter_integration}
*/
export class DataSpaceliftBitbucketDatacenterIntegration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_bitbucket_datacenter_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftBitbucketDatacenterIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftBitbucketDatacenterIntegration to import
  * @param importFromId The id of the existing DataSpaceliftBitbucketDatacenterIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/bitbucket_datacenter_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftBitbucketDatacenterIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_bitbucket_datacenter_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/bitbucket_datacenter_integration spacelift_bitbucket_datacenter_integration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftBitbucketDatacenterIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftBitbucketDatacenterIntegrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spacelift_bitbucket_datacenter_integration',
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

  // api_host - computed: true, optional: false, required: false
  public get apiHost() {
    return this.getStringAttribute('api_host');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // user_facing_host - computed: true, optional: false, required: false
  public get userFacingHost() {
    return this.getStringAttribute('user_facing_host');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vcs_checks - computed: true, optional: false, required: false
  public get vcsChecks() {
    return this.getStringAttribute('vcs_checks');
  }

  // webhook_secret - computed: true, optional: false, required: false
  public get webhookSecret() {
    return this.getStringAttribute('webhook_secret');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
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
