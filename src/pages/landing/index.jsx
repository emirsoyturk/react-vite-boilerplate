import Layout from '../../components/Layout.jsx'
import '../../styles/output.css'
import CancelIcon from '../../assets/icons/cancel.svg'
import toast from 'react-hot-toast'

export default function Landing() {
    return (
        <Layout>
            <div className={'flex flex-row text-4xl space-x-4'}>
                <h1>
                    Close
                </h1>
                <div className={'cursor-pointer'}
                     onClick={() => toast.error("Error")}
                >
                    <CancelIcon />
                </div>
            </div>
        </Layout>
    )
}