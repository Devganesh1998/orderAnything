export const ACCOUNT_TYPE = {
    CUSTOMER: 'CUSTOMER',
    DELIVERY: 'DELIVERY',
    ADMIN: 'ADMIN',
};

export const USER_TYPE = {
    INTERNAL: 'INTERNAL',
    EXTERNAL: 'EXTERNAL',
};

export const ORDER_STAGE = {
    TASK_CREATED: 'TASK_CREATED',
    REACHED_STORE: 'REACHED_STORE',
    ITEMS_PICKED: 'ITEMS_PICKED',
    ENROUTE: 'ENROUTE',
    DELIVERED: 'DELIVERED',
    CANCELED: 'CANCELED',
};

export const PAYMENT_MODE = {
    CASH: 'CASH',
    CARD: 'CARD',
    UPI: 'UPI',
};

export const CART_STAGE = {
    OPEN: 'OPEN',
    DISCARD: 'DISCARD',
    CHECKED_OUT: 'CHECKED_OUT',
};

export const PORT = process.env.PORT || 4500;
export const isDev = process.env.NODE_ENV === 'development';

export const ALLOWED_ORIGINS = [process.env.ALLOWED_ORIGIN, 'http://localhost:3000'];
