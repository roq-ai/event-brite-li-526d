interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Event Manager'],
  customerRoles: [],
  tenantRoles: ['Event Manager'],
  tenantName: 'Organization',
  applicationName: 'event brite - Library Events ',
  addOns: ['notifications'],
};
