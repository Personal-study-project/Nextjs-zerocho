import style from './home.module.css';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import TabProvider from '@/app/(afterLogin)/home/_component/TabProvider';
import PostForm from './_component/PostForm';

export default function Page() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                {/* <Post /> */}
            </TabProvider>
        </main>
    );
}
