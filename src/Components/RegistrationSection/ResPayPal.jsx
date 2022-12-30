import "./ResPayPal.css"
function PayPal() {
    return (
        <>
        <div className="payPal">
    <h1>Pay via Paypal</h1>
    <p>For Payment from International Authors/Attendees, use the following paypal link with additional 5% service charges applies Pay via Paypal</p>
    <div className="payPalBtn">
        <button><a href="https://www.paypal.com/paypalme/ICICCConference?locale.x=en_GB" target="_blank">Pay via Paypal</a></button>
    </div>
 </div>
        </>
      );
}

export default PayPal ;