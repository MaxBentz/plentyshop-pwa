import {
  Context,
  useUserShippingFactory,
  UseUserShippingFactoryParams
} from '@vue-storefront/core';
import {
  AddressData,
  AddressType,
  UserShippingAddress as Address,
  UserShippingAddressItem as AddressItem
} from '@vue-storefront/plentymarkets-api';

const params: UseUserShippingFactoryParams<Address, AddressItem> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addAddress: async (context: Context, shippingDetails) => {
    return await context.$plentymarkets.api.saveAddress(AddressType.Shipping, shippingDetails);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteAddress: async (context: Context, shippingDetails: any) => {
    await context.$plentymarkets.api.deleteAddress(shippingDetails.address.id, shippingDetails.customQuery.typeId);
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.updateAddress');
    return {};
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, params): Promise<AddressData[]> => {
    const data = await context.$plentymarkets.api.loadAddresses(AddressType.Shipping);
    return data ?? null;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDefaultAddress: async (context: Context, params) => {
    console.log('Mocked: useUserShipping.setDefaultAddress');
    return {};
  }
};

export const useUserShipping = useUserShippingFactory<Address, AddressItem>(params);
