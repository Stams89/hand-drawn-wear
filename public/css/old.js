const triggerData = $('Return Trigger Data').first().json;
const subscriber = $('Create Subscriber').first().json;
const discount = $('Get Discount').first().json;

const cdrs = [];
const aid = Number(triggerData[`after[aid]`]);
const sid = Number(triggerData[`after[sid]`]);
const credit_time = new Date().toISOString()

// Collect all services
for(let i = 0; triggerData[`after[services][${i}][service_id]`]; i++) {
  cdrs.push({
    aid,
    sid,
    rate: triggerData[`after[services][${i}][name]`],
    credit_time,
    usagev: 1,
    type: 'credit',
    // aprice: ,
  });
}

// Add discount if a coupon is available
if(triggerData[`after[coupon_code][0]`]) {
  cdrs.push({
    aid,
    sid,
    rate: 'DISCOUNT',
    credit_time,
    usagev: 1,
    type: 'credit',
    aprice: -discount.subject.plan.GENERIC_PLAN.value/1.17,
  });
}

return {
  data: {
    cdrs,
    aid,
    send_email: 0,
    allow_bill: 1,
    step: 2,
    invoice_unixtime: parseInt(Date.now()/1000)
  }
};

