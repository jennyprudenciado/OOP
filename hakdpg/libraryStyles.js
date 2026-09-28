import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7F2",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  greeting: {
    color: "#8C928B",
    fontSize: 14,
    marginBottom: 6,
  },

  heading: {
    color: "#1F261F",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.7,
  },

  profileCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#2E5E45",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 15,
  },

  searchBar: {
    height: 54,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E7E9E2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 28,
  },

  searchIcon: {
    fontSize: 28,
    color: "#2F6148",
    marginRight: 10,
    marginTop: -4,
  },

  searchText: {
    flex: 1,
    color: "#8C928B",
    fontSize: 14,
  },

  filterText: {
    fontSize: 22,
    color: "#2F6148",
    fontWeight: "700",
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#1F261F",
    fontSize: 19,
    fontWeight: "800",
  },

  seeAll: {
    color: "#2F6148",
    fontSize: 13,
    fontWeight: "700",
  },

  readingCard: {
    backgroundColor: "#2F6148",
    borderRadius: 22,
    padding: 16,
    flexDirection: "row",
    marginBottom: 28,
    shadowColor: "#1D3827",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.16,
    shadowRadius: 12,
    elevation: 5,
  },

  bookCoverBox: {
    width: 88,
    height: 128,
    borderRadius: 10,
    backgroundColor: "#D9E7D8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },

  coverText: {
    color: "#2F6148",
    fontSize: 15,
    fontWeight: "700",
  },

  readingInfo: {
    flex: 1,
    paddingTop: 4,
  },

  label: {
    color: "#CFE1D3",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 8,
  },

  readingTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "800",
    marginBottom: 5,
  },

  readingAuthor: {
    color: "#DDEFE0",
    fontSize: 13,
    marginBottom: 18,
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressTrack: {
    flex: 1,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#5E7E68",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#F2CF7A",
    borderRadius: 4,
  },

  progressValue: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    marginLeft: 8,
  },

  chapterText: {
    color: "#D4E5D7",
    fontSize: 11,
    marginTop: 8,
  },

  categoryRow: {
    paddingBottom: 28,
    paddingRight: 12,
  },

  categoryChip: {
    paddingHorizontal: 16,
    height: 38,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E7E9E2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  activeCategoryChip: {
    backgroundColor: "#2F6148",
    borderColor: "#2F6148",
  },

  categoryText: {
    color: "#7D867F",
    fontSize: 13,
    fontWeight: "600",
  },

  activeCategoryText: {
    color: "#FFFFFF",
  },

  bookRow: {
    paddingBottom: 28,
    paddingRight: 12,
  },

  bookCard: {
    width: 142,
    marginRight: 16,
  },

  bookCoverLarge: {
    height: 190,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  bookCoverLargeText: {
    color: "#1F261F",
    fontWeight: "800",
    fontSize: 14,
    textAlign: "center",
  },
  bookImage: {
  width: "100%",
  height: "100%",
  borderRadius: 10,
  },
  readingBookImage:{
    width:"100",
    height:"100%",
    borderRadius: 10,
  },
  ratingBadge: {
    position: "absolute",
    top: 14,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  star: {
    color: "#E7A94B",
    fontSize: 11,
    marginRight: 3,
  },

  ratingText: {
    color: "#1F261F",
    fontSize: 10,
    fontWeight: "800",
  },

  bookTitle: {
    color: "#1F261F",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "800",
  },

  bookAuthorText: {
    color: "#8C928B",
    fontSize: 12,
    marginTop: 4,
  },

  quoteCard: {
    backgroundColor: "#EFE9D8",
    borderRadius: 20,
    padding: 20,
    marginTop: 2,
  },

  quoteMark: {
    color: "#2F6148",
    fontSize: 38,
    fontWeight: "800",
    height: 28,
  },

  quoteText: {
    color: "#1F261F",
    fontSize: 17,
    lineHeight: 24,
    fontWeight: "700",
    marginTop: 4,
  },

  quoteAuthor: {
    color: "#8C928B",
    fontSize: 12,
    marginTop: 12,
  },

  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 82,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E7E9E2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 8,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 60,
  },

  activeNavIcon: {
    color: "#2F6148",
    fontSize: 23,
    fontWeight: "800",
  },

  activeNavText: {
    color: "#2F6148",
    fontSize: 11,
    fontWeight: "800",
    marginTop: 4,
  },

  navIcon: {
    color: "#A9AEA5",
    fontSize: 22,
  },

  navText: {
    color: "#A9AEA5",
    fontSize: 11,
    marginTop: 5,
  },
});