export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold">
          Transparent Pricing. No Hidden Fees.
        </h3>

        <div className="mt-8 max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-xl font-semibold">Pay-as-you-go</div>
            <div className="mt-2 text-gray-600">
              ₹3 – ₹5 per transaction • No monthly fee
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-xl font-semibold">Scale</div>
            <div className="mt-2 text-gray-600">
              Volume discounts • Faster settlements
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <div className="text-xl font-semibold">Enterprise</div>
            <div className="mt-2 text-gray-600">
              SLA • Dedicated support • Custom pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
