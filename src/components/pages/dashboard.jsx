import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <p className='font-bold text-3xl text-dark'> Analytics here</p>
       <div class="flex flex-wrap -mx-4">
       <div class="w-full md:w-1/2 xl:w-1/3 p-4">
  <div class="bg-green-500 rounded-lg shadow-lg p-5">
    <h2 class="text-white text-lg font-semibold mb-2">Revenue</h2>
    <p class="text-white text-3xl font-bold">$10,000</p>
  </div>
</div>

<div class="w-full md:w-1/2 xl:w-1/3 p-4">
  <div class="bg-blue-500 rounded-lg shadow-lg p-5">
    <h2 class="text-white text-lg font-semibold mb-2">Website Traffic</h2>
    <p class="text-white text-3xl font-bold">100,000</p>
  </div>
</div>

<div class="w-full md:w-1/2 xl:w-1/3 p-4">
  <div class="bg-yellow-500 rounded-lg shadow-lg p-5">
    <h2 class="text-white text-lg font-semibold mb-2">User Engagement</h2>
    <p class="text-white text-3xl font-bold">75%</p>
  </div>
</div>

<div class="w-full md:w-1/2 xl:w-1/3 p-4">
  <div class="bg-purple-500 rounded-lg shadow-lg p-5">
    <h2 class="text-white text-lg font-semibold mb-2">Conversion Rate</h2>
    <p class="text-white text-3xl font-bold">3.5%</p>
  </div>
</div>

<div class="w-full md:w-1/2 xl:w-1/3 p-4">
  <div class="bg-indigo-500 rounded-lg shadow-lg p-5">
    <h2 class="text-white text-lg font-semibold mb-2">Bounce Rate</h2>
    <p class="text-white text-3xl font-bold">25%</p>
  </div>
</div>

<div class="w-full md:w-1/2 xl:w-1/3 p-4">
  <div class="bg-pink-500 rounded-lg shadow-lg p-5">
    <h2 class="text-white text-lg font-semibold mb-2">Social Media Engagement</h2>
    <p class="text-white text-3xl font-bold">12,000</p>
  </div>
</div>


      </div>
    </div>
  )
}

export default Dashboard