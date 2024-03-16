import { useState } from "react";
import { ToastNotification } from "@carbon/react";

const FeedbackForm = () => {
    const [showToast, setShowToast] = useState(false);
    const [feedbackCategory, setFeedbackCategory] = useState("complaint");
    const [websiteFeedback, setWebsiteFeedback] = useState("");
    const [contextFeedback, setContextFeedback] = useState("");
    const [otherFeedback, setOtherFeedback] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your logic to handle form submission
        // For now, let's just show the toast notification and clear the input fields
        setShowToast(true);
        setWebsiteFeedback("");
        setContextFeedback("");
        setOtherFeedback("");
    };

    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <form style={{ width: '400px' }} onSubmit={handleSubmit}>
                <h2>Feedback Category</h2>
                <select style={{ width: '100%', marginBottom: '10px' }} value={feedbackCategory} onChange={(e) => setFeedbackCategory(e.target.value)}>
                    <option value="complaint">Complaint</option>
                    <option value="improvement">Improvement</option>
                    <option value="question">Question</option>
                    <option value="other">Other</option>
                </select>

                <h2>What brought you to this website?</h2>
                <input type="text" style={{ width: '100%', marginBottom: '10px' }} value={websiteFeedback} onChange={(e) => setWebsiteFeedback(e.target.value)} />

                <h2>Context of Your Feedback</h2>
                <textarea style={{ width: '100%', height: '70px', marginBottom: '10px' }} value={contextFeedback} onChange={(e) => setContextFeedback(e.target.value)} />

                <h2>Context of Feedback</h2>
                <textarea style={{ width: '100%', height: '120px', marginBottom: '10px' }} value={otherFeedback} onChange={(e) => setOtherFeedback(e.target.value)} />

                <button type="submit" style={{ width: '100%' }}>Submit</button>
            </form>
            {showToast && (
                <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <ToastNotification
                        kind="success"
                        title="Feedback Submitted"
                        subtitle="Thank you for your feedback!"
                        caption=""
                        onCloseButtonClick={() => setShowToast(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default FeedbackForm;
