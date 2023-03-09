import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function UserModal({
  isOpen,
  isUserSelf,
  onClose,
}: {
  isOpen: boolean;
  isUserSelf: boolean;
  onClose: () => void;
}) {
  const cancelButtonRef = useRef(null);
  const [imgs, setImgs] = useState<string[]>([]);
  const [imgFiles, setImgFiles] = useState<Blob[]>([]);

  const handleFileChange = (e: any) => {
    const newImgs = [];
    for (const file of e.target.files) {
      newImgs.push(URL.createObjectURL(file));
    }
    setImgs([...imgs, ...newImgs]);
    setImgFiles([...imgFiles, ...e.target.files]);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                <div className="bg-white">
                  <h1 className="flex items-center justify-center h-20 font-bold">
                    Change Profile Photo
                  </h1>
                  <span
                    className="flex items-center justify-center h-10 border-t-2 cursor-pointer text-blue-500 font-bold"
                    onClick={handleFileChange}
                  >
                    Upload Photo
                    <input type="file" className='absolute top-0 left-0 opacity-0 w-full h-full' onChange={handleFileChange} accept="image/*" multiple />
                  </span>
                  {/* <button className="absolute top-1/3 left-1/3 px-3 py-2 bg-sky-600 rounded-lg text-white font-bold cursor-pointer">
                    Select from computer
                    <input
                      type="file"
                      className="absolute top-0 left-0 opacity-0 w-full h-full"
                      onChange={handleFileChange}
                      accept="image/*"
                      multiple
                    />
                  </button> */}
                  <span className="flex items-center justify-center h-10 border-t-2 cursor-pointer text-red-500 font-bold">
                    Remove Current Photo
                  </span>
                  <span
                    className="flex items-center justify-center h-10 border-t-2 cursor-pointer"
                    onClick={onClose}
                  >
                    Cancel
                  </span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
