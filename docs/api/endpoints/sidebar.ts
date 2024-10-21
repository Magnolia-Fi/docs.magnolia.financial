import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/endpoints/magnolia-api",
    },
    {
      type: "category",
      label: "CurrentOrganization",
      items: [
        {
          type: "doc",
          id: "api/endpoints/retrieve-the-current-organization",
          label: "Retrieve the current organization.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/update-the-current-organization",
          label: "Update the current organization.",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/endpoints/create-a-read-only-user",
          label: "Create a read-only user.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/retrieve-the-webhook-configuration",
          label: "Retrieve the webhook configuration.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/patch-the-current-webhook-config",
          label: "Patch the current webhook config.",
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
          id: "api/endpoints/retrieve-the-filtered-paged-list-with-custodial-accounts",
          label: "Retrieve the filtered, paged list with custodial accounts.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/create-the-new-custodial-account",
          label: "Create the new custodial account.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/get-custodial-account-agreement",
          label: "Get custodial account agreement",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/retrieve-the-custodial-account-by-id",
          label: "Retrieve the custodial account by id.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/update-account-status",
          label: "Update account status",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/endpoints/retrieve-the-custodial-account-balances",
          label: "Retrieve the custodial account balances.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/retrieve-the-crypto-deposit-instructions",
          label: "Retrieve the crypto deposit instructions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/update-custodial-account-label",
          label: "Update custodial account label",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/endpoints/update-account-name",
          label: "Update account name",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/endpoints/withdraw-crypto",
          label: "Withdraw crypto.",
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
          id: "api/endpoints/retrieve-the-filtered-paged-list-with-payments",
          label: "Retrieve the filtered, paged list with payments.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/create-the-payment",
          label: "Create the payment.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/retrieve-the-payment-by-id",
          label: "Retrieve the payment by id.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/approve-payment-allowed-only-for-integration-dashboard-users",
          label: "Approve payment. Allowed only for Integration dashboard users.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/cancel-payment-right-now-ach-payments-cancelling-supported-only",
          label: "Cancel payment, right now ACH payments cancelling supported only",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/endpoints/reject-payment-allowed-only-for-integration-dashboard-users",
          label: "Reject payment. Allowed only for Integration dashboard users.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/endpoints/create-a-payment-for-sub-accounts",
          label: "Create a payment for sub accounts.",
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
          id: "api/endpoints/retrieve-the-filtered-paged-list-with-transactions",
          label: "Retrieve the filtered, paged list with transactions.",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/endpoints/retrieve-the-transaction-by-id",
          label: "Retrieve the transaction by id.",
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
          id: "api/endpoints/execute-transfer",
          label: "Execute transfer.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
