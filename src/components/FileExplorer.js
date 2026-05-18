import { useCallback } from "react";
import PropTypes from "prop-types";
import { mockTreeData } from "../data/mockTreeData";
import { useTreeState } from "../hooks/useTreeState";
import TreeNode from "./TreeNode";

export default function FileExplorer({ data, renderCustomContent }) {
  const treeData = data || mockTreeData;
  const { isExpanded, toggleNode } = useTreeState();

  const stableRenderCustomContent = useCallback(
    (node) => (renderCustomContent ? renderCustomContent(node) : null),
    [renderCustomContent],
  );

  return (
    <ul
      role="tree"
      aria-label="File Explorer"
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        backgroundColor: "#fafafa",
        margin: 0,
        listStyle: "none",
      }}
    >
      <TreeNode
        node={treeData}
        level={0}
        isExpanded={isExpanded}
        onToggle={toggleNode}
        renderCustomContent={renderCustomContent}
      />
    </ul>
  );
}

FileExplorer.propTypes = {
  data: PropTypes.object,
  renderCustomContent: PropTypes.func,
};
