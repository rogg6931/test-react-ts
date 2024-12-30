import "./style.css";

const SkeletonLoader = () => {
    return (
        <tr>
            <td colSpan={5} className="text-center">
                <div className="skeleton-loader">Loading...</div>
            </td>
        </tr>
    );
};

export default SkeletonLoader;
