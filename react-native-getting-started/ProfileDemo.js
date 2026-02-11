import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';

const ProfileDemo = () => {
  return (
    <ImageBackground
      source={{
        uri: 'hb723cf961d3ettps://images.unsplash.com/photo-1507525428034-',
      }}
      style={styles.background}
      blurRadius={2}
    >
      {/* Overlay for readability */}
      <View style={styles.overlay}>

        <View style={styles.card}>

          {/* Avatar */}
          <Image
            source={{ uri: 'https://tr.rbxcdn.com/180DAY-d4a6d1564bf7c0e65447501bdb3cc584/420/420/FaceAccessory/Webp/noFilter' }}
            style={styles.avatar}
          />

          {/* Course */}
          <Text style={styles.title}>BSIS3-B</Text>

          {/* Name */}
          <Text style={styles.name}>Amber Princess Rosana</Text>

          {/* Meta */}
          <Text style={styles.meta}>Age: 20 · Hobby: Playing Guitar</Text>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Pet Peeves */}
          <Text style={styles.sectionTitle}>Pet Peeves</Text>
          <View style={styles.bullets}>
            <Text style={styles.bullet}>• Joking during inapproriate moments</Text>
            <Text style={styles.bullet}>• Seen lang </Text>
            <Text style={styles.bullet}>• Over sa reklamo</Text>
          </View>

        </View>

      </View>
    </ImageBackground>
  );
};

export default ProfileDemo;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(230, 248, 246, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 360,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#99E5DC',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F766E',
  },

  subtitle: {
    fontSize: 14,
    color: '#5FB3A2',
    marginBottom: 6,
  },

  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#134E4A',
  },

  meta: {
    fontSize: 14,
    color: '#3A9188',
    marginBottom: 16,
  },

  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D1FAF5',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0F766E',
    marginBottom: 8,
  },

  bullets: {
    alignSelf: 'flex-start',
  },

  bullet: {
    fontSize: 15,
    color: '#134E4A',
    marginBottom: 6,
  },
});
