import React from 'react';
import { Truck, Wrench, Database, Snowflake, Gauge, Shield } from 'lucide-react';

const HydrogenRefuelingStation = () => {
  const amenities = [
    { icon: Truck, label: 'Tube Trailer' },
    { icon: Wrench, label: 'Compressor' },
    { icon: Database, label: 'High Pressure Buffer' },
    { icon: Snowflake, label: 'Chiller' },
    { icon: Gauge, label: 'Dispenser' },
    { icon: Shield, label: 'Safety Block' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Panel - Process Flow Diagram */}
        <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-4 left-4 text-xs text-gray-500 font-medium">
            From<br />Inland
          </div>
          
          <div className="absolute top-4 right-4 text-xs text-gray-500 font-medium">
            From<br />the Sea
          </div>

          {/* Main Flow Diagram */}
          <div className="relative mt-12">
            
            {/* Hydrogen Refueling Station - Central Element */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-amber-500 rounded"></div>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-800">NetPowerH</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">
                      Green Hydrogen for Maritime Energy
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow Lines and Components */}
            <div className="relative">
              {/* Upper flow line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gray-300 via-blue-400 to-gray-300"></div>
              
              {/* Storage Replacement Box */}
              <div className="absolute top-[-20px] right-8 bg-gray-100 border border-gray-200 rounded-lg px-3 py-1">
                <div className="text-xs text-gray-600 font-medium">STORAGE REPLACEMENT</div>
              </div>

              {/* Amenities Section */}
              <div className="mt-8 mb-8">
                <div className="text-left mb-4">
                  <div className="text-sm font-medium text-blue-600 mb-1">AMENITIES</div>
                  <div className="text-xs text-gray-500">CAFÉ / SHOPS</div>
                  <div className="text-xs text-gray-500">SMART MOBILITY</div>
                </div>
              </div>

              {/* Lower flow line */}
              <div className="relative mt-8">
                <div className="h-px bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 mb-4"></div>
                <div className="absolute left-8 top-[-8px] bg-blue-100 rounded-full p-2">
                  <Gauge className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-xs text-blue-600 font-medium ml-16">HYDROGEN DISPENSER</div>
              </div>
            </div>
          </div>

          {/* Equipment Icons Row */}
          <div className="grid grid-cols-6 gap-4 mt-12 pt-8 border-t border-gray-100">
            {amenities.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
                  <item.icon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-xs text-center text-gray-600 font-medium leading-tight">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Marina Image */}
        <div className="relative">
          <div className="bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800 rounded-3xl overflow-hidden shadow-2xl aspect-square">
            
            {/* Water Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-400 to-teal-700">
              {/* Water texture effect */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      animation: `float ${Math.random() * 3 + 2}s ease-in-out infinite`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Dock Structure */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5">
              <div className="bg-amber-800 h-16 rounded-t-lg relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-amber-700 rounded-t-lg"></div>
                
                {/* Dock Posts */}
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute top-2 bg-amber-900 w-2 h-12 rounded"
                    style={{ left: `${15 + i * 14}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Boats */}
            <div className="absolute bottom-20 right-8">
              <div className="relative">
                {/* Sailboat */}
                <div className="bg-white rounded-full w-16 h-8 relative mb-4">
                  <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-12 bg-amber-800"></div>
                    <div className="absolute top-0 left-[-8px] w-4 h-8 bg-blue-200 rounded-r-full"></div>
                  </div>
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-8">
              <div className="relative">
                {/* Motor Yacht */}
                <div className="bg-white rounded-xl w-20 h-10 relative">
                  <div className="absolute top-1 left-2 w-16 h-6 bg-blue-100 rounded-lg"></div>
                  <div className="absolute top-[-4px] left-4 w-12 h-4 bg-gray-100 rounded-t-lg"></div>
                  <div className="absolute top-[-8px] left-6 w-8 h-4 bg-white rounded-t-lg"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-60"></div>
            <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-400 rounded-full opacity-15"></div>
        </div>
      </div>

    </div>
  );
};

export default HydrogenRefuelingStation;