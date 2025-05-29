import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
} from 'next-share';

interface BlogShareProps {
    url: string,
    title: string,
}

const BlogShare = ({url, title}: { url: string; title: string }) => {
    return (
        <div className="flex gap-4 mt-10">
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round/>
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={32} round/>
            </WhatsappShareButton>
        </div>
    );
};

export default BlogShare;
