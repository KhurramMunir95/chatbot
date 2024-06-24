import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { close, google, discord2, x, linkedin, signup } from '../utils/Images'
import { Link } from 'react-router-dom'

export default function SigInModal({ show, setShow }) {

  return (
    <Dialog className="relative z-10" open={show} onClose={setShow}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-sm sm:px-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-12/12 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="dark-modal pb-4 sm:p-1 sm:pb-4">
              <div>
                <div className="text-center sm:mt-0">
                  <div className="mt-2">
                    <div>
                      <div className='text-center share-modal'>
                          <div className="modal-dialog p-0">
                              <div className="modal-content p-0">
                                <div className="modal-body flex flex-wrap text-left gap-10">
                                    <div className='grow'>
                                        <h5 className='text-xl text-white'>Sign In</h5>
                                        <p className='text-white mt-3 font-thin'>Chat for free with unlimited access <br /> and explore over 100k prompts from the <br /> community!</p>
                                        <div className="flex justify-between">
                                            <a href="#" type='link' className='btn-link'>
                                                <img src={google} alt="" />
                                            </a>
                                            <a href="#" type='link' className='btn-link'>
                                                <img src={discord2} alt="" />
                                            </a>
                                            <a href="#" type='link' className='btn-link'>
                                                <img src={x} alt="" />
                                            </a>
                                            <a href="#" type='link' className='btn-link'>
                                                <img src={linkedin} alt="" />
                                            </a>
                                        </div>
                                        <p className='bordered-paragraph text-center mt-4'>OR</p>
                                        {/* <form> */}
                                            <input type="email" className='default-input mb-4' name="" placeholder='Enter your email...' />
                                            <Link to='/chatbot/profile' className='btn btn-purple text-center block' onClick={() => setShow(false)}>Continue</Link>
                                        {/* </form> */}
                                        <p className='text-gray absolute bottom-0 font-normal'>By continuing, you agree to our Terms of Service <br /> and Privacy Policy</p>
                                    </div>
                                    <div className='relative flex w-full md:w-auto'>
                                        <img src={signup} className='rounded-xl grow signup-img' width='350' alt="" />
                                        <p className='text-white text-center w-full text-lg absolute bottom-20 md:bottom-7'>Create your own chatbots</p>
                                    </div>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
