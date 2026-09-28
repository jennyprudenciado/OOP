import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F3F4",
  },

  header: {
    backgroundColor: "#941111",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 4,
  },

  headerSubtitle: {
    color: "#D5F4E6",
    fontSize: 14,
  },

  categoryFilterSection: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E8EEF0",
    paddingVertical: 8,
  },

  categoryFilterList: {
    paddingHorizontal: 12,
  },

  categoryFilter: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#ECF0F1",
    marginHorizontal: 4,
  },

  categoryFilterActive: {
    backgroundColor: "#941111",
  },

  categoryFilterText: {
    color: "#7F8C8D",
    fontSize: 13,
    fontWeight: "600",
  },

  categoryFilterTextActive: {
    color: "#FFFFFF",
  },

  inputSection: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E8EEF0",
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#BDC3C7",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    color: "#2C3E50",
    backgroundColor: "#F8F9FA",
  },

  quantityInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BDC3C7",
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: "#F8F9FA",
  },

  quantityLabel: {
    color: "#7F8C8D",
    fontSize: 12,
    fontWeight: "600",
    marginRight: 4,
  },

  quantityInput: {
    width: 40,
    paddingVertical: 10,
    fontSize: 16,
    color: "#2C3E50",
    textAlign: "center",
  },

  addButton: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#941111",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  listContent: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  groceryItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  checkboxContainer: {
    marginRight: 12,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    backgroundColor: "#941111",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  checkboxPurchased: {
    backgroundColor: "#941111",
    borderColor: "#941111",
  },

  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },

  itemDetails: {
    flex: 1,
  },

  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  categoryEmoji: {
    fontSize: 20,
    marginRight: 8,
  },

  itemName: {
    fontSize: 16,
    color: "#2C3E50",
    fontWeight: "600",
    marginRight: 8,
    flex: 1,
  },

  itemNamePurchased: {
    textDecorationLine: "line-through",
    color: "#95A5A6",
  },

  categoryBadge: {
    backgroundColor: "#E8F8F5",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  categoryLabel: {
    color: "#941111",
    fontSize: 11,
    fontWeight: "600",
  },

  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F3F4",
    borderRadius: 8,
    marginHorizontal: 8,
    paddingHorizontal: 4,
  },

  quantityButton: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    fontSize: 18,
    color: "#941111",
    fontWeight: "bold",
  },

  quantityText: {
    fontSize: 14,
    color: "#2C3E50",
    fontWeight: "600",
    marginHorizontal: 4,
    minWidth: 20,
    textAlign: "center",
  },

  deleteButton: {
    padding: 8,
  },

  deleteButtonText: {
    fontSize: 18,
  },

  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyEmoji: {
    fontSize: 60,
    marginBottom: 16,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 8,
  },

  emptyText: {
    fontSize: 16,
    color: "#7F8C8D",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  footer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#E8EEF0",
    alignItems: "center",
    justifyContent: "space-around",
  },

  summaryItem: {
    flex: 1,
    alignItems: "center",
  },

  summaryValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#941111",
  },

  summaryLabel: {
    fontSize: 12,
    color: "#7F8C8D",
    marginTop: 4,
  },

  summaryDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#E8EEF0",
    marginHorizontal: 8,
  },
});