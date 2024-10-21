import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "CurrentOrganization",
      items: [
        {
          type: "doc",
          id: "api/retrieve-the-current-organization-auth",
          label: "Retrieve the current organization. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-the-current-organization-auth",
          label: "Update the current organization. (Auth)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/create-a-read-only-user-auth",
          label: "Create a read-only user. (Auth)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/retrieve-the-webhook-configuration-auth",
          label: "Retrieve the webhook configuration. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/patch-the-current-webhook-config-auth",
          label: "Patch the current webhook config. (Auth)",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "CustodialAccounts",
      items: [
        {
          type: "doc",
          id: "api/retrieve-the-filtered-paged-list-with-custodial-accounts-auth",
          label: "Retrieve the filtered, paged list with custodial accounts. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-the-new-custodial-account-auth",
          label: "Create the new custodial account. (Auth)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-custodial-account-agreement-auth",
          label: "Get custodial account agreement (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-the-custodial-account-by-id-auth",
          label: "Retrieve the custodial account by id. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-account-status-auth",
          label: "Update account status (Auth)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/retrieve-the-custodial-account-balances-auth",
          label: "Retrieve the custodial account balances. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-the-crypto-deposit-instructions-auth",
          label: "Retrieve the crypto deposit instructions. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/update-custodial-account-label-auth",
          label: "Update custodial account label (Auth)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/update-account-name-auth",
          label: "Update account name (Auth)",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/withdraw-crypto-auth",
          label: "Withdraw crypto. (Auth)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "api/retrieve-the-filtered-paged-list-with-payments-auth",
          label: "Retrieve the filtered, paged list with payments. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-the-payment-auth",
          label: "Create the payment. (Auth)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/retrieve-the-payment-by-id-auth",
          label: "Retrieve the payment by id. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/approve-payment-allowed-only-for-integration-dashboard-users-auth",
          label: "Approve payment. Allowed only for Integration dashboard users. (Auth)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cancel-payment-right-now-ach-payments-cancelling-supported-only-auth",
          label: "Cancel payment, right now ACH payments cancelling supported only (Auth)",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/reject-payment-allowed-only-for-integration-dashboard-users-auth",
          label: "Reject payment. Allowed only for Integration dashboard users. (Auth)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/create-a-payment-for-sub-accounts-auth",
          label: "Create a payment for sub accounts. (Auth)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Transactions",
      items: [
        {
          type: "doc",
          id: "api/retrieve-the-filtered-paged-list-with-transactions-auth",
          label: "Retrieve the filtered, paged list with transactions. (Auth)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/retrieve-the-transaction-by-id-auth",
          label: "Retrieve the transaction by id. (Auth)",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Transfers",
      items: [
        {
          type: "doc",
          id: "api/execute-transfer-auth",
          label: "Execute transfer. (Auth)",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
