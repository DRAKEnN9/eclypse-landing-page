// src/pages/Checkout.tsx
import Header from '@/components/Header';
import React from 'react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  return (
    <div className="min-h-screen w-[90vw] mx-auto content-center items-center flex bg-gray-50">
      {/* Header placeholder, or import your Header component */}
      {/* <Header /> */}

      <div className="max mx-auto p-4 md:p-8">
        {/* Back Link */}
        <Link to="/" className="flex items-center text-gray-700 hover:text-black mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="uppercase tracking-wide">Shipping Address</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Address Form */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="h-5 w-5 rounded-full border-2 border-red-600 mr-3 flex-shrink-0"></div>
              <h2 className="text-xl font-medium">Add New Address</h2>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full h-16 p-2 border rounded" />
                <input type="text" placeholder="Last Name" className="w-full h-16 p-2 border rounded" />
              </div>
              <input type="text" placeholder="Street Address" className="w-full p-2 h-16 border rounded" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input type="text" placeholder="Apt Number" className="w-full h-16 p-2 border rounded" />
                <input type="text" placeholder="State" className="w-full h-16 p-2 border rounded" />
                <input type="text" placeholder="Zip" className="w-full h-16 p-2 border rounded" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="button" className="flex-1 p-3 border rounded uppercase tracking-wide hover:bg-gray-100 transition">
                  Cancel
                </button>
                <button type="submit" className="flex-1 p-3 bg-black text-white rounded uppercase tracking-wide hover:bg-gray-800 transition">
                  Save This Address
                </button>
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow space-y-6">
          <p className="text-sm text-gray-600">
  By placing your order, you agree to our company{' '}
  <a href="/privacy-policy" className="underline">Privacy policy</a>{' '}
  and{' '}
  <a href="/terms-of-use" className="underline">Conditions of use</a>.
</p>
            <div className="space-y-2 border-t border-b border-gray-300 py-4">
              <div className="flex justify-between">
                <span>Items - Silhouette No. 1 – Vermilion</span>
                <span>₹ 7,999</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping and handling:</span>
                <span>₹ 200</span>
              </div>
              <div className="flex justify-between">
                <span>Before tax:</span>
                <span>₹ 6,599</span>
              </div>
              <div className="flex justify-between">
                <span>Tax Collected:</span>
                <span>₹ 1,400</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Order Total:</span>
              <span className="text-2xl font-bold">₹ 8,199</span>
            </div>
            <button className="w-full p-4 bg-black text-white rounded uppercase tracking-wide hover:bg-gray-800 transition">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
