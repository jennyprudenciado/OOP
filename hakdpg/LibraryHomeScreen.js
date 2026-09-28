import React from "react";
import {
    Image,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { styles } from "../styles/libraryStyles";

const categories = [
  "All",
  "Fiction",
  "Design",
  "Self-growth",
  "Business",
];

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    rating: "4.9",
    image:require("../assets/atomic-habits.jpg")
  },
  {
    title: "The Rain in España",
    author: "4reuminct",
    rating: "4.5",
    image:require("../assets/rain-in-espana.jpg")
  },
  {
    title: "Good to Great",
    author: "Jim Collins",
    rating: "4.6",
    image:require("../assets/good-to-greate.jpg")
  },
];

export default function LibraryHomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8F7F2"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning, Lisa</Text>
            <Text style={styles.heading}>Find your next book</Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>LS</Text>
          </View>
        </View>

        {/* Search bar */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>⌕</Text>
          <Text style={styles.searchText}>
            Search books, authors, or genres
          </Text>
          <Text style={styles.filterText}>☷</Text>
        </View>

        {/* Continue reading title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Continue reading</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        {/* Continue reading card */}
        <View style={styles.readingCard}>
          <View style={styles.bookCoverBox}>
            <Image
            source={require("../assets/law-of-human-nature.jpg")}
            style={styles.readingBookImage}
            resizeMode="cover"
            />
          </View>

          <View style={styles.readingInfo}>
            <Text style={styles.label}>CURRENTLY READING</Text>

            <Text style={styles.readingTitle}>
              The Laws of Human Nature
            </Text>

            <Text style={styles.readingAuthor}>Robert Greene</Text>

            <View style={styles.progressRow}>
              <View style={styles.progressTrack}>
                <View
                  style={[
                    styles.progressFill,
                    { width: "68%" },
                  ]}
                />
              </View>

              <Text style={styles.progressValue}>68%</Text>
            </View>

            <Text style={styles.chapterText}>Chapter 12 of 690</Text>
          </View>
        </View>

        {/* Categories title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore categories</Text>
        </View>

        {/* Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryRow}
        >
          {categories.map((category, index) => (
            <View
              key={index}
              style={[
                styles.categoryChip,
                category === "All" && styles.activeCategoryChip,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === "All" && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Popular books title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular this week</Text>
          <Text style={styles.seeAll}>View all</Text>
        </View>

        {/* Popular books */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.bookRow}
        >
          {books.map((book, index) => (
            <View
              key={index}
              style={styles.bookCard}
            >
              <View
                style={[
                  styles.bookCoverLarge,
                  { backgroundColor: book.color },
                ]}
              >
                <Image 
                source={book.image}
                style={styles.bookImage}
                resizeMode="cover"
                />
                </View>

              <View style={styles.ratingBadge}>
                <Text style={styles.star}>★</Text>
                <Text style={styles.ratingText}>
                  {book.rating}
                </Text>
              </View>

              <Text style={styles.bookTitle}>
                {book.title}
              </Text>

              <Text style={styles.bookAuthorText}>
                {book.author}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Quote card */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteMark}>“</Text>

          <Text style={styles.quoteText}>
            For each weakness there is a corresponding strength.
          </Text>

          <Text style={styles.quoteAuthor}>
            — Robert Greene
          </Text>
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.activeNavIcon}>🏠</Text>
          <Text style={styles.activeNavText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🗒</Text>
          <Text style={styles.navText}>Library</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⭐</Text>
          <Text style={styles.navText}>Saved</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </View>
  );
}