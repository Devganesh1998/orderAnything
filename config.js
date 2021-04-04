const ACCOUNT_TYPE = {
    CUSTOMER: 'CUSTOMER',
    DELIVERY: 'DELIVERY',
    ADMIN: 'ADMIN',
};

const USER_TYPE = {
    INTERNAL: 'INTERNAL',
    EXTERNAL: 'EXTERNAL',
};

const ORDER_STAGE = {
    TASK_CREATED: 'TASK_CREATED',
    REACHED_STORE: 'REACHED_STORE',
    ITEMS_PICKED: 'ITEMS_PICKED',
    ENROUTE: 'ENROUTE',
    DELIVERED: 'DELIVERED',
    CANCELED: 'CANCELED',
};

const PAYMENT_MODE = {
    CASH: 'CASH',
    CARD: 'CARD',
    UPI: 'UPI',
};

const CART_STAGE = {
    OPEN: 'OPEN',
    DISCARD: 'DISCARD',
    CHECKED_OUT: 'CHECKED_OUT',
};

const PORT = process.env.PORT || 4500;
const isDev = process.env.NODE_ENV === 'development';

const ALLOWED_ORIGINS = [process.env.ALLOWED_ORIGIN, 'http://localhost:3000'];

export default {
    ACCOUNT_TYPE,
    USER_TYPE,
    ORDER_STAGE,
    PAYMENT_MODE,
    CART_STAGE,
    PORT,
    isDev,
    ALLOWED_ORIGINS,
};
