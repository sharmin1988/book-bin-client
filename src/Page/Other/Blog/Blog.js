import React from 'react';

const Blog = () => {
    return (
        <div className='container px-6 py-6 lg:py-12 mx-auto'>

            <div className="relative bg-white  lg:p-6 ">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2  lg:items-center">
                    <div className="lg:col-start-2 w-full max-w-2xl">
                        <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:leading-9">
                            Our Blogs
                        </h4>
                        <ul className="mt-10">
                            <li>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 text-gray-900 font-bold">
                                            What are the different ways to manage a state in a React application?
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            Every React component has a built-in state. This state is an object which stores the property values that belong to a component.
                                            <br />
                                            The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:

                                            Hooks,
                                            React Context API,
                                            Apollo Link State.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 text-gray-900 font-bold">
                                        How does prototypical inheritance work?
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500 ">
                                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 text-gray-900 font-bold">
                                        What is a unit test? Why should we write unit tests?
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. 
                                        <br />
                                        A unit can be almost anything you want it to be -- a line of code, a method, or a class. Generally though, smaller is better. Smaller tests give you a much more granular view of how your code is performing. There is also the practical aspect that when you test very small units, your tests can be run fast; like a thousand tests in a second fast.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li className="mt-10">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg leading-6 text-gray-900 font-bold">
                                        React vs. Angular vs. Vue?
                                        </h5>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                        Vue and Angular are more similar. However, there are still aspects you have to keep in mind when choosing a frontend framework for your web application development. 
                                        <br />
                                        Vue have Limited core functionality that can be easily extended with third-party solutions.
                                        <br />Angular is Monolithic framework with extensive functionality out of the box, making Angular applications more heavyweight.
                                        <br />Vue use Pure JavaScript as Programming language, but Angular use TypeScript for better performance or pure JavaScript.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4 hidden lg:block h-full max-w-lg">
                        <img src="https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg?size=626&ext=jpg&ga=GA1.2.1239272833.1664376337&semt=sph" alt="illustration" className="relative mx-auto shadow-lg rounded h-screen w-auto" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;