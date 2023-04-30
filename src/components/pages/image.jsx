import {HiSpeakerphone} from 'react-icons/hi'
import { PhotoIcon } from '@heroicons/react/24/solid'

function Image() {
  return (
    <div className="flex flex-col  space-y-2">
      <div className="font-bold text-3xl text-txtclr capitalize flex gap-3 items-center">
            <div className='w-[2.5rem]'>
                <HiSpeakerphone className='w-full text-black' color='black' fill='#000'/>
            </div>
                Main Image
      </div>
        
        <form className="flex flex-col items-start space-y-3">
          <div className="col-span-full w-full">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  {/* Cover photo */}
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900 bg-white px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
          </div>

          <button className="capitalize text-white bg-[#23675A] rounded-sm px-5 py-1">
            SAVE
          </button>
      </form>
    </div>
  );
}

export default Image;
