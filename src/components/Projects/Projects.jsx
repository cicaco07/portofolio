import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='py-20' id='project'>
      <h1 className='text-center py-10 font-bold text-5xl'>Projects</h1>
      <div className='flex flex-wrap justify-center pt-10 gap-10'>
        <div className='w-full max-w-lg sm:max-w-xl md:max-w-2xl h-full bg-accent rounded-xl'>
          <div className='m-6 justify-center flex'>
            <Image 
              src="/image/project-1.jpg"
              width={610}
              height={400}
              alt=""
            />
          </div>
          <div className='mx-8 text-common'>
            <h1 className='font-bold text-2xl pb-4'>My Bengkel App</h1>
            <p className='text-justify'>
            The Service Queue Information System product is an application developed to improvise 
            the business processes of a service dealer. With this product, it becomes easier for 
            service dealers to manage service queues, sell motorbike spare parts, administer service 
            data, and so on. Apart from that, this product can also make it easier for dealer customers 
            to view and register service queues, see estimated service costs based on complaints submitted 
            by customers, and so on.
            </p>
          </div>
          <div className='flex justify-end m-6'>
            <button className="btn btn-secondary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Details</button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-2xl">My Bengkel App</h3>
                  <p className="py-4 text-lg text-justify">
                  The Service Queue Information System product is an application developed to improvise 
                  the business processes of a service dealer. With this product, it becomes easier for service 
                  dealers to manage service queues, sell motorbike spare parts, administer service data, and so on. 
                  Apart from that, this product can also make it easier for dealer customers to view and 
                  register service queues, see estimated service costs based on complaints submitted by 
                  customers, and so on. However, to be able to use this application, customers need to have an 
                  electronic device that can access a web browser before they can access this application, so 
                  it requires each customer to have the device first. After that, each customer must fill in their 
                  username, password, personal data and motorbike data first and then be registered as a customer. 
                  Then new customers can access our application via a web browser by searching for our site URL and 
                  logging in using their username and password. After successful login, customers can access the features 
                  available in this application. The basis for this product being created is that we see that nowadays 
                  many people have electronic devices that can access web browsers, so we hope that this product will 
                  reach areas that make it possible to ease several problems before accessing our application.</p>
                  <h3 className="font-bold text-xl my-4">Feature I Worked On: </h3>
                  <li className='text-lg text-justify'>
                    Login and register form with multirole user: there is admin, mechanic, dealer and customer role.
                    Every role have different job and things to do. User cant change their role unless they contact via admin
                  </li>
                  <li className='text-lg text-justify'>
                    Mechanic page: there is many features in mechanic page, like customer service data management, shopping carts
                    and mechanic can see status of the service (accepted, process or done)
                  </li>
                  <li className='text-lg text-justify'>
                    Admin Page: in this page admin just change user role, management user data (give or change user role ex: customer to dealer)
                  </li>
                  <h3 className="font-bold text-xl my-4">Click image to enlarge : </h3>
                  <div className='flex gap-4'>
                    <Image 
                      src="/image/Yi Byul.jpeg" 
                      alt="" 
                      width="100" 
                      height="100" 
                      className='' 
                      onClick={()=>document.getElementById('modal_3').showModal()}
                    />
                    <dialog id="modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <Image src="/image/Yi Byul.jpeg" alt="" width="500" height="500" className='pt-10'/>
                      </div>
                    </dialog>
                    <Image 
                      src="/image/project-1.jpg" 
                      alt="" 
                      width="100" 
                      height="50" 
                      className='' 
                      onClick={()=>document.getElementById('modal_4').showModal()}
                    />
                    <dialog id="modal_4" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <Image src="/image/project-1.jpg" alt="" width="1000" height="500" className='pt-10'/>
                      </div>
                    </dialog>
                  </div>
                  <h3 className="font-bold text-xl my-4">Language and tools: </h3>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-secondary">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
          </div>
        </div>
        <div className='w-full max-w-lg sm:max-w-xl md:max-w-2xl h-full bg-accent rounded-xl'>
          <div className='m-6 justify-center flex'>
            <Image 
              src="/image/project-1.jpg"
              width={610}
              height={400}
              alt=""
            />
          </div>
          <div className='mx-8 text-common'>
            <h1 className='font-bold text-2xl pb-4'>My Bengkel App</h1>
            <p className='text-justify'>
            The Service Queue Information System product is an application developed to improvise 
            the business processes of a service dealer. With this product, it becomes easier for 
            service dealers to manage service queues, sell motorbike spare parts, administer service 
            data, and so on. Apart from that, this product can also make it easier for dealer customers 
            to view and register service queues, see estimated service costs based on complaints submitted 
            by customers, and so on.
            </p>
          </div>
          <div className='flex justify-end m-6'>
            <button className="btn btn-secondary" onClick={()=>document.getElementById('my_modal_2').showModal()}>Details</button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-2xl">My Bengkel App</h3>
                  <p className="py-4 text-lg text-justify">
                  The Service Queue Information System product is an application developed to improvise 
                  the business processes of a service dealer. With this product, it becomes easier for service 
                  dealers to manage service queues, sell motorbike spare parts, administer service data, and so on. 
                  Apart from that, this product can also make it easier for dealer customers to view and 
                  register service queues, see estimated service costs based on complaints submitted by 
                  customers, and so on. However, to be able to use this application, customers need to have an 
                  electronic device that can access a web browser before they can access this application, so 
                  it requires each customer to have the device first. After that, each customer must fill in their 
                  username, password, personal data and motorbike data first and then be registered as a customer. 
                  Then new customers can access our application via a web browser by searching for our site URL and 
                  logging in using their username and password. After successful login, customers can access the features 
                  available in this application. The basis for this product being created is that we see that nowadays 
                  many people have electronic devices that can access web browsers, so we hope that this product will 
                  reach areas that make it possible to ease several problems before accessing our application.</p>
                  <h3 className="font-bold text-xl my-4">Feature I Worked On: </h3>
                  <li className='text-lg text-justify'>
                    Login and register form with multirole user: there is admin, mechanic, dealer and customer role.
                    Every role have different job and things to do. User cant change their role unless they contact via admin
                  </li>
                  <li className='text-lg text-justify'>
                    Mechanic page: there is many features in mechanic page, like customer service data management, shopping carts
                    and mechanic can see status of the service (accepted, process or done)
                  </li>
                  <li className='text-lg text-justify'>
                    Admin Page: in this page admin just change user role, management user data (give or change user role ex: customer to dealer)
                  </li>
                  <h3 className="font-bold text-xl my-4">Click image to enlarge : </h3>
                  <div className='flex gap-4'>
                    <Image 
                      src="/image/Yi Byul.jpeg" 
                      alt="" 
                      width="100" 
                      height="100" 
                      className='' 
                      onClick={()=>document.getElementById('modal_5').showModal()}
                    />
                    <dialog id="modal_5" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <Image src="/image/Yi Byul.jpeg" alt="" width="500" height="500" className='pt-10'/>
                      </div>
                    </dialog>
                    <Image 
                      src="/image/project-1.jpg" 
                      alt="" 
                      width="100" 
                      height="50" 
                      className='' 
                      onClick={()=>document.getElementById('modal_6').showModal()}
                    />
                    <dialog id="modal_6" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <Image src="/image/project-1.jpg" alt="" width="1000" height="500" className='pt-10'/>
                      </div>
                    </dialog>
                  </div>
                  
                  <h3 className="font-bold text-xl my-4">Language and tools: </h3>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-secondary">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
