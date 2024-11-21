import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Footer = () => {
  return (
    <div className="bg-black text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="w-full max-w-md">
          <Card className="bg-[#17181c] p-6 rounded-lg shadow-lg">
            <CardHeader>
              <CardDescription className="text-gray-400">Deploy your new project in one-click.</CardDescription>
              <CardTitle className="text-white text-xl mt-2">Seeking personalized support? Request a call from our team</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input id="name" placeholder="Enter your name" className="p-2 rounded-md" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="phone">No Telp</Label>
                    <Input id="phone" placeholder="Enter your phone number" className="p-2 rounded-md" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2">Submit</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-8">
            {/* First Column */}
            <div>
              <h1 className="text-lg font-semibold text-[#2b6c9a]">Term and Policies</h1>
              <ul className="text-gray-400 space-y-2 mt-2">
                <li className="hover:underline cursor-pointer">FAQ</li>
                <li className="hover:underline cursor-pointer">Seller</li>
                <li className="hover:underline cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <h1 className="text-lg font-semibold text-[#2b6c9a]">About Us</h1>
              <ul className="text-gray-400 space-y-2 mt-2">
                <li className="hover:underline cursor-pointer">Gallery</li>
                <li className="hover:underline cursor-pointer">Technologies</li>
                <li className="hover:underline cursor-pointer">Contacts</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-row">
            <div>
              <h1 className="text-lg font-semibold text-[#2b6c9a]">Contact Us</h1>
              <ul className="text-gray-400 space-y-2 mt-2">
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@example.com</li>
                <li>Place: 123 Street, City, Country</li>
              </ul>
            </div>

            {/* Download Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4 text-[#2b6c9a]">Download the Application</h2>
              <div className="flex flex-row space-x-4">
                {/* Google Play Icon */}
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/google-play.png" alt="Google Play" className="w-32 h-auto" />
                </a>
                {/* App Store Icon */}
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="/app-store.png" alt="App Store" className="w-32 h-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
