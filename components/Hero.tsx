"use client"

import { Bot } from '@/models/Bot'
import { Brain } from '@/models/Brain'
import { OrbitControls, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Features from './Features'

const Hero = () => {
    return (
        <div className='w-screen'>
            <div className='sm:flex hidden pt-28'>
                <div className='w-[40%] mt-24 pl-16'>
                    <div>
                        <h1 className='font-bold lg:text-6xl md:text-4xl w-fit'>
                            Welcome to
                        </h1>
                        <h1 className='ml-20 lg:text-7xl md:text-5xl mt-2 text-[#D801CF] font-extrabold w-fit'>
                            AI Studio!
                        </h1>
                    </div>
                    <div className='mt-20 -ml-12 -mr-12 font-semibold'>
                        <h1 className='text-4xl leading-relaxed text-center'>
                            <span className='text-5xl text-[#D801CF]'>&quot; </span> Forge the future with AI Studio,
                            Where Intelligence meets Innovation. <span className='text-5xl text-[#D801CF]'> &quot;</span>
                        </h1>
                    </div>
                </div>
                <div className='w-[60%] '>
                    <Canvas >
                        <Suspense >
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                                intensity={1}
                                castShadow
                            />
                            <OrbitControls
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2 - 0.1}
                                minPolarAngle={Math.PI / 2 - 0.1}
                            />
                            <Bot
                                scale={1.8}
                                animationSpeed={0.5}
                                position={[0, -1, 0]}
                            />
                        </Suspense>
                        <Preload all />
                    </Canvas>
                </div>
            </div>

            <div className=''>
                <div className='h-10'>
                    {/* MOBILE NAVBAR */}
                </div>
                <div className='pl-1 mt-12 mx-auto w-fit'>
                    <h1 className='font-semibold text-4xl'>
                        Welcome to :
                    </h1>
                    <h1 className='font-bold text-5xl pl-6 text-[#D801CF]'>
                        AI Studio!
                    </h1>
                </div>

                <div className='w-full h-[300px] -mt-12 mx-auto'>
                    <Canvas >
                        <Suspense >
                            <spotLight
                                position={[10, 10, 10]}
                                angle={0.15}
                                penumbra={1}
                                intensity={1}
                                castShadow
                            />
                            <OrbitControls
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2 - 0.1}
                                minPolarAngle={Math.PI / 2 - 0.1}
                            />
                            <Bot
                                scale={2}
                                animationSpeed={0.5}
                                position={[0, -2, 0]}
                            />
                        </Suspense>
                        <Preload all />
                    </Canvas>
                </div>

                <div className='w-full px-12 mt-4'>
                    <h1 className='font-medium text-center text-2xl'>
                        <span className=' text-[#D801CF] font-extrabold text-2xl'>&quot; </span> Forge the future with AI Studio,
                        Where Intelligence meets Innovation. <span className='text-[#D801CF] font-extrabold text-2xl -mt-2 '> &quot;</span>
                    </h1>
                </div>

                <div className=''>
                    <Features />
                </div>
            </div>

            {/* <div className='-mt-8'>
                <Features/>
            </div> */}
        </div>
    )
}

export default Hero