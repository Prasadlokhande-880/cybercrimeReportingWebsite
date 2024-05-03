import { Link } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import IconArrowWaveLeftUp from '../../components/Icon/IconArrowWaveLeftUp';
import IconDesktop from '../../components/Icon/IconDesktop';
import IconUser from '../../components/Icon/IconUser';
import IconBox from '../../components/Icon/IconBox';
import IconDollarSignCircle from '../../components/Icon/IconDollarSignCircle';
import IconRouter from '../../components/Icon/IconRouter';
import IconPlusCircle from '../../components/Icon/IconPlusCircle';
import IconMinusCircle from '../../components/Icon/IconMinusCircle';
import IconPlayCircle from '../../components/Icon/IconPlayCircle';
import IconX from '../../components/Icon/IconX';

const KnowledgeBase = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Knowledge Base'));
    });
    const [activeTab, setActiveTab] = useState<String>('general');
    const [active1, setActive1] = useState<any>(1);
    const [active2, setActive2] = useState<any>(1);
    const [modal, setModal] = useState(false);
    const items = [
        {
            src: '/assets/images/knowledge/image-5.jpg',
            title: 'Excessive sugar is harmful',
        },
        {
            src: '/assets/images/knowledge/image-6.jpg',
            title: 'Creative Photography',
        },
        {
            src: '/assets/images/knowledge/image-7.jpg',
            title: 'Plan your next trip',
        },
        {
            src: '/assets/images/knowledge/image-8.jpg',
            title: 'My latest Vlog',
        },
    ];

    return (
        <div>
            
            <div className="mb-12 flex items-center rounded-b-md bg-[#DBE7FF] dark:bg-[#141F31]">
                <ul className="mx-auto flex items-center gap-5 overflow-auto whitespace-nowrap px-3 py-4.5 xl:gap-8">
                    <li
                        className={`group flex min-w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-md px-8 py-2.5 text-center text-[#506690] duration-300 hover:bg-white hover:text-primary dark:hover:bg-[#1B2E4B]
                    ${activeTab === 'general' ? 'bg-white text-primary dark:bg-[#1B2E4B]' : ''}`}
                        onClick={() => setActiveTab('general')}
                    >
                        <IconDesktop fill={true} />

                        <h5 className="font-bold text-black dark:text-white">General</h5>
                    </li>
                    <li
                        className={`group flex min-w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-md px-8 py-2.5 text-center text-[#506690] duration-300 hover:bg-white hover:text-primary dark:hover:bg-[#1B2E4B]
                    ${activeTab === 'quick-support' ? 'bg-white text-primary dark:bg-[#1B2E4B]' : ''}`}
                        onClick={() => setActiveTab('quick-support')}
                    >
                        <IconUser fill={true} className="w-8 h-8" />

                        <h5 className="font-bold text-black dark:text-white">Quick Support</h5>
                    </li>
                    <li
                        className={`group flex min-w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-md px-8 py-2.5 text-center text-[#506690] duration-300 hover:bg-white hover:text-primary dark:hover:bg-[#1B2E4B]
                    ${activeTab === 'free-updates' ? 'bg-white text-primary dark:bg-[#1B2E4B]' : ''}`}
                        onClick={() => setActiveTab('free-updates')}
                    >
                        <IconBox fill={true} />

                        <h5 className="font-bold text-black dark:text-white">Free Updates</h5>
                    </li>
                    <li
                        className={`group flex min-w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-md px-8 py-2.5 text-center text-[#506690] duration-300 hover:bg-white hover:text-primary dark:hover:bg-[#1B2E4B]
                    ${activeTab === 'pricing' ? 'bg-white text-primary dark:bg-[#1B2E4B]' : ''}`}
                        onClick={() => setActiveTab('pricing')}
                    >
                        <IconDollarSignCircle fill={true} />

                        <h5 className="font-bold text-black dark:text-white">Pricing</h5>
                    </li>
                    <li
                        className={`group flex min-w-[120px] cursor-pointer flex-col items-center justify-center gap-4 rounded-md px-8 py-2.5 text-center text-[#506690] duration-300 hover:bg-white hover:text-primary dark:hover:bg-[#1B2E4B]
                    ${activeTab === 'hosting' ? 'bg-white text-primary dark:bg-[#1B2E4B]' : ''}`}
                        onClick={() => setActiveTab('hosting')}
                    >
                        <IconRouter fill={true} />

                        <h5 className="font-bold text-black dark:text-white">Hosting</h5>
                    </li>
                </ul>
            </div>
            <h3 className="mb-8 text-center text-xl font-semibold md:text-2xl">
                Some common <span className="text-primary">questions</span>
            </h3>
            <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                <div className="rounded-md bg-white dark:bg-black">
                    <div className="border-b border-white-light p-6 text-[22px] font-bold dark:border-dark dark:text-white">General topics?</div>
                    <div className="divide-y divide-white-light px-6 py-4.5 dark:divide-dark">
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active1 === 1 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive1(active1 === 1 ? null : 1)}
                            >
                                <span>How to install VRISTO Admin</span>
                                {active1 !== 1 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active1 === 1 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active1 === 2 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive1(active1 === 2 ? null : 2)}
                            >
                                <span> Where can I subscribe to your newsletter?</span>
                                {active1 !== 2 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active1 === 2 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active1 === 3 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive1(active1 === 3 ? null : 3)}
                            >
                                <span>How to install VRISTO Admin</span>
                                {active1 !== 3 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active1 === 3 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active1 === 5 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive1(active1 === 5 ? null : 5)}
                            >
                                <span>How to install VRISTO Admin</span>
                                {active1 !== 5 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active1 === 5 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-white dark:bg-black">
                    <div className="border-b border-white-light p-6 text-[22px] font-bold dark:border-dark dark:text-white">Quick support & Free update</div>
                    <div className="divide-y divide-white-light px-6 py-4.5 dark:divide-dark">
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active2 === 1 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive2(active2 === 1 ? null : 1)}
                            >
                                <span>How to use Browser Sync</span>
                                {active2 !== 1 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active2 === 1 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active2 === 2 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive2(active2 === 2 ? null : 2)}
                            >
                                <span> Sidebar not rendering CSS</span>
                                {active2 !== 2 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active2 === 2 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active2 === 3 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive2(active2 === 3 ? null : 3)}
                            >
                                <span>Connect with us Personally</span>
                                {active2 !== 3 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active2 === 3 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                        <div>
                            <div
                                className={`flex cursor-pointer items-center justify-between gap-10 px-2.5 py-2 text-base font-semibold hover:bg-primary-light hover:text-primary dark:text-white dark:hover:bg-[#1B2E4B] dark:hover:text-primary
                            ${active2 === 5 ? 'bg-primary-light dark:bg-[#1B2E4B] !text-primary' : ''}`}
                                onClick={() => setActive2(active2 === 5 ? null : 5)}
                            >
                                <span>Compilation Issue</span>
                                {active2 !== 5 ? (
                                    <span className="shrink-0">
                                        <IconPlusCircle duotone={false} />
                                    </span>
                                ) : (
                                    <span className="shrink-0">
                                        <IconMinusCircle fill={true} />
                                    </span>
                                )}
                            </div>
                            <AnimateHeight duration={300} height={active2 === 5 ? 'auto' : 0}>
                                <div className="px-1 py-3 font-semibold text-white-dark">
                                    <p>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </p>
                                </div>
                            </AnimateHeight>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel mt-10 text-center md:mt-20">
                <h3 className="mb-2 text-xl font-bold dark:text-white md:text-2xl">Still need help?</h3>
                <div className="text-lg font-medium text-white-dark">
                    Our specialists are always happy to help. Contact us during standard business hours or email us24/7 and we'll get back to you.
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button type="button" className="btn btn-primary">
                        Contact Us
                    </button>
                    <button type="button" className="btn btn-primary">
                        Visit our community
                    </button>
                </div>
            </div>
            <div className="mt-10 flex flex-col-reverse items-center justify-between gap-5 rounded-md bg-gradient-to-tl from-[rgba(234,241,255,0.44)] to-[rgba(234,241,255,0.96)] px-6 py-2.5 dark:from-[rgba(14,23,38,0.44)] dark:to-[#0E1726] md:flex-row lg:mt-20 xl:px-16">
                <div className="flex-1 py-3.5 text-center md:text-start">
                    <h3 className="mb-2 text-xl font-bold dark:text-white md:text-2xl">Didn’t find any solutions?</h3>
                    <div className="text-lg font-medium text-white-dark">Loaded with awesome features like documentation, knowledge base forum, domain transfer, affiliates etc.</div>
                    <div className="mt-8 flex justify-center md:justify-start lg:mt-16">
                        <button type="button" className="btn btn-primary">
                            Raise support tickets
                        </button>
                    </div>
                </div>
                <div className="w-52 max-w-xs lg:w-full">
                    <img src="/assets/images/knowledge/find-solution.svg" alt="find-solution" className="w-full object-cover rtl:rotate-y-180 dark:brightness-[2.59] dark:grayscale-[83%]" />
                </div>
            </div>
            <div className="mt-10">
                <h3 className="mb-6 text-xl font-bold md:text-3xl">Popular Topics</h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-1.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">Excessive sugar is harmful</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-1.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-2.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">Creative Photography</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-2.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-3.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">Plan your next trip</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-3.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black">
                        <div className="max-h-56 overflow-hidden rounded-md">
                            <img src="/assets/images/knowledge/image-4.jpg" alt="..." className="w-full object-cover" />
                        </div>
                        <h5 className="text-xl dark:text-white">My latest Vlog</h5>
                        <div className="flex">
                            <div className="me-4 overflow-hidden rounded-full bg-white-dark">
                                <img src="/assets/images/profile-4.jpeg" className="h-11 w-11 object-cover" alt="profile1" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-1.5 font-semibold dark:text-white">Alma Clark</h4>
                                <p>06 May</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 lg:mt-16">
                <h3 className="mb-6 text-xl font-bold md:text-3xl">Popular Video Tutorial</h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    {items.map((item: any, i) => {
                        return (
                            <div
                                key={i}
                                className="space-y-5 rounded-md border border-white-light bg-white p-5 shadow-[0px_0px_2px_0px_rgba(145,158,171,0.20),0px_12px_24px_-4px_rgba(145,158,171,0.12)] dark:border-[#1B2E4B] dark:bg-black"
                            >
                                <div className="relative h-[340px] overflow-hidden rounded-md group">
                                    <img src={item.src} alt="video tutorial" className="h-full w-full object-cover cursor-pointer" onClick={() => setModal(true)} />
                                    <button
                                        type="button"
                                        className="absolute left-1/2 top-1/2 grid h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full text-white duration-300 group-hover:scale-110"
                                        onClick={() => setModal(true)}
                                    >
                                        <IconPlayCircle className="h-[62px] w-[62px]" fill={true} />
                                    </button>
                                    <div className="absolute bottom-0 left-0 w-full bg-white/30 px-5 py-[22px] text-center text-xl text-white backdrop-blur-[5px]">Excessive sugar is harmful</div>
                                </div>
                            </div>
                        );
                    })}
                    ;
                </div>
                <Transition appear show={modal} as={Fragment}>
                    <Dialog as="div" open={modal} onClose={() => setModal(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0" />
                        </Transition.Child>
                        <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                            <div className="flex min-h-screen items-start justify-center px-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="my-8 w-full max-w-3xl overflow-hidden">
                                        <div className="text-right">
                                            <button onClick={() => setModal(false)} type="button" className="text-white-dark hover:text-dark">
                                                <IconX />
                                            </button>
                                        </div>
                                        <iframe title="youtube-video" src="https://www.youtube.com/embed/tgbNymZ7vqY" className="h-[250px] w-full md:h-[550px]"></iframe>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
};

export default KnowledgeBase;
