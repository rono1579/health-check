import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Response({ response }) {
  return (
    <div className="chat-div">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {response}
      </ReactMarkdown>
    </div>

  );
}
