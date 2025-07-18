// https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook#id DataSpaceliftWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the stack which triggers the webhooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook#module_id DataSpaceliftWebhook#module_id}
  */
  readonly moduleId?: string;
  /**
  * ID of the stack which triggers the webhooks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook#stack_id DataSpaceliftWebhook#stack_id}
  */
  readonly stackId?: string;
  /**
  * ID of the webhook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook#webhook_id DataSpaceliftWebhook#webhook_id}
  */
  readonly webhookId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook spacelift_webhook}
*/
export class DataSpaceliftWebhook extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftWebhook to import
  * @param importFromId The id of the existing DataSpaceliftWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.27.0/docs/data-sources/webhook spacelift_webhook} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_webhook',
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
    this._moduleId = config.moduleId;
    this._stackId = config.stackId;
    this._webhookId = config.webhookId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

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

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // webhook_id - computed: false, optional: false, required: true
  private _webhookId?: string; 
  public get webhookId() {
    return this.getStringAttribute('webhook_id');
  }
  public set webhookId(value: string) {
    this._webhookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookIdInput() {
    return this._webhookId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      module_id: cdktf.stringToTerraform(this._moduleId),
      stack_id: cdktf.stringToTerraform(this._stackId),
      webhook_id: cdktf.stringToTerraform(this._webhookId),
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
      module_id: {
        value: cdktf.stringToHclTerraform(this._moduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_id: {
        value: cdktf.stringToHclTerraform(this._webhookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
