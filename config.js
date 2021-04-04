exports.ACCOUNT_TYPE = {
    CUSTOMER: 'CUSTOMER',
    DELIVERY: 'DELIVERY',
    ADMIN: 'ADMIN',
};

exports.USER_TYPE = {
    INTERNAL: 'INTERNAL',
    EXTERNAL: 'EXTERNAL',
};

exports.ORDER_STAGE = {
    TASK_CREATED: 'TASK_CREATED',
    REACHED_STORE: 'REACHED_STORE',
    ITEMS_PICKED: 'ITEMS_PICKED',
    ENROUTE: 'ENROUTE',
    DELIVERED: 'DELIVERED',
    CANCELED: 'CANCELED',
};

exports.PAYMENT_MODE = {
    CASH: 'CASH',
    CARD: 'CARD',
    UPI: 'UPI',
};

exports.CART_STAGE = {
    OPEN: 'OPEN',
    DISCARD: 'DISCARD',
    CHECKED_OUT: 'CHECKED_OUT',
};

exports.PORT = process.env.PORT || 4500;
exports.isDev = process.env.NODE_ENV === 'development';

exports.ALLOWED_ORIGINS = [process.env.ALLOWED_ORIGIN, 'http://localhost:3000'];
