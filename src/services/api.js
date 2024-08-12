export const getExchangeRate = async (from, to, amount) => {
    const rates = {
      'PEN_TO_USDT': 3.748,
      'USDT_TO_PEN': 3.707,
    };
  
    const key = `${from}_TO_${to}`;
  
    if (key === 'PEN_TO_USDT') {
      return (amount / rates[key]).toFixed(2);
    } else if (key === 'USDT_TO_PEN') {
      return (amount * rates[key]).toFixed(2);
    }
  
    return amount;
  };
  
  export const validateCoupon = (coupon) => {
    const validCoupons = {
      'DISCOUNT10': 0.10,
    };
  
    return validCoupons[coupon.toUpperCase()] || null;
  };
  