// AboutScreen.js

// import { LinearGradient } from 'expo-linear-gradient'; // for gradient background
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View
    
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View >
          <Text style={styles.title}>Welcome to NURA</Text>
{/* 
          <Image
            source={require('../assets/about-image.png')} // make sure this image exists
            style={styles.image}
            resizeMode="cover"
          /> */}

          <Text style={styles.subtitle}>🎯 Ujeedada App-ka</Text>
          <Text style={[styles.paragraph]}>
            App-kan waxa uu kuu fududaynayaa maareynta hawlahaaga maalinlaha ah. Waxaa loo
            sameeyay in uu noqdo mid sahlan, degdeg ah, oo ammaan ah.
          </Text>


          <Text style={styles.subtitle}>💡 Maxaa Kaa Faa'iidaysanaya?</Text>
          <Text style={styles.paragraph}>
            - Isticmaal fudud iyo interface nadiif ah.{"\n"}
            - Karti sare iyo adeeg degdeg ah.{"\n"}
            - Xogtaada si buuxda ayaa loo ilaaliyaa.
          </Text>
          <Text style={styles.subtitle}>💡 Maxaa Kaa Faa'iidaysanaya?</Text>
          <Text style={styles.paragraph}>
            - Isticmaal fudud iyo interface nadiif ah.{"\n"}
            - Karti sare iyo adeeg degdeg ah.{"\n"}
            - Xogtaada si buuxda ayaa loo ilaaliyaa.
          </Text>
          <View style={styles.footer}>
            <Text style={styles.version}>📱 Nooca App: 1.0.0</Text>
            <Text style={styles.copy}>© 2025 Shirkaddaada</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    // elevation: 3,
    width: '80%',
    maxWidth: 350,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1F2937',
    // textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    marginTop: 16,
  },
  paragraph: {
    fontSize: 16,
    // lineHeight: 24,
    color: '#4B5563',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: '#6B7280',
  },
  copy: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 4,
  },
});

export default About;
