import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { NODE_TYPES } from "../types/types";

// Implement recursive rendering, expand/collapse logic, memoization, and custom content support
const TreeNode = memo(function TreeNode({
  node,
  level,
  isExpanded,
  onToggle,
  renderCustomContent,
}) {
  const isFolder = node.type === NODE_TYPES.FOLDER;
  const hasChildren =
    isFolder && Array.isArray(node.children) && node.children.length > 0;
  const expanded = isExpanded(node.id);

  const handleToggle = useCallback(() => {
    if (isFolder) {
      onToggle(node.id);
    }
  }, [isFolder, node.id, onToggle]);

  /// func to toggle expand/collapse folder via key down
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleToggle();
      }
      if (e.key == "ArrowRight" && isFolder && !expanded) {
        e.preventDefault();
        onToggle(node.id);
      }
      if (e.key == "ArrowLeft" && isFolder && expanded) {
        e.preventDefault();
        onToggle(node.id);
      }
    },
    [handleToggle, isFolder, expanded, onToggle, node.id],
  );

  return (
    <li
      role="treeitem"
      aria-expanded={isFolder ? expanded : undefined}
      style={{ listStyle: "none" }}
    >
      <div
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-label={`${node.name} ${isFolder ? "folder" : "file"}`}
        style={{
          cursor: isFolder ? "pointer" : "default",
          padding: "4px 8px",
          paddingLeft: level * 16 + 8,
          display: "flex",
          alignItems: "center",
          gap: 6,
          borderRadius: 4,
          userSelect: "none",
          transition: "background-color 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#e0e0e0"; // here should be some kinda of grey color
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        {isFolder ? (
          <span
            aria-hidden="true"
            style={{ fontSize: 10, width: 12, textAlign: "center" }}
          >
            {expanded ? "-" : "+"}
          </span>
        ) : (
          <span style={{ width: 12 }} />
        )}
        <span aria-hidden="true">{isFolder ? "Folder" : "File"}</span>
        <span>{node.name}</span>
        {renderCustomContent && renderCustomContent(node)}
      </div>

      {isFolder && expanded && hasChildren && (
        <ul role="group" style={{ padding: 0, margin: 0 }}>
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              isExpanded={isExpanded}
              onToggle={onToggle}
              renderCustomContent={renderCustomContent}
            />
          ))}
        </ul>
      )}
    </li>
  );
});

TreeNode.displayName = "TreeNode";

TreeNode.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["folder", "file"]).isRequired,
    children: PropTypes.array,
  }).isRequired,
  level: PropTypes.number,
  isExpanded: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  renderCustomContent: PropTypes.func,
};

export default TreeNode;
