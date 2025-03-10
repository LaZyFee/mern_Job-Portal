import { Tabs } from '@mantine/core';
import { activeJobs } from '../../assets/Data/PostedJob';
import { PostedJobCard } from './PostedJobCard';

export const PostedJob = () => {


    return (

        <div className='w-1/6 mt-5'>
            <h1 className="text-2xl font-semibold mb-5">Posted Jobs</h1>
            <div>
                <Tabs variant="pills" defaultValue="active" autoContrast>
                    <Tabs.List className='[&_button[aria-selected="false"]]:!bg-mine-shaft-900 font-medium'>
                        <Tabs.Tab value="active">Active [4]</Tabs.Tab>
                        <Tabs.Tab value="draft">Drafts[1]</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="active">
                        <div className='flex flex-col gap-3 mt-3'>
                            {
                                activeJobs.map((item, index) => <PostedJobCard key={index} {...item} />)
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="draft">draft panel</Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}