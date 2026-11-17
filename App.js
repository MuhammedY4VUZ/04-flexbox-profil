import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

// Ödev Görevi 3: İstatistik kutusunu bağımsız bir bileşene çevirme (StatKutusu)
function StatKutusu({ deger, ad, renk = '#2563eb' }) {
  return (
    <View style={styles.kutu}>
      <Text style={[styles.kutuDeger, { color: renk }]}>{deger}</Text>
      <Text style={styles.kutuAd}>{ad}</Text>
    </View>
  );
}

export default function App() {
  return (
    <ScrollView style={styles.ekran} contentContainerStyle={styles.icerik}>
      {/* Profil Başlık Kartı */}
      <View style={styles.profilKarti}>
        {/* Ödev Görevi 2: Projedeki assets klasöründen görsel yükleme (icon / avatar) */}
        <Image
          source={require('./assets/icon.png')}
          style={styles.avatar}
        />
        <Text style={styles.isim}>Kahraman Kaan</Text>
        <Text style={styles.sinif}>Seviye 7 · Ejderha Savaşçısı</Text>
        
        <View style={styles.rozetler}>
          <Text style={styles.rozet}>🛡️ Muhafız</Text>
          <Text style={styles.rozet}>⚡ Yıldırım Klanı</Text>
        </View>
      </View>

      {/* İstatistikler Başlığı */}
      <Text style={styles.bolumBasligi}>Karakter Nitelikleri</Text>

      {/* Ödev Görevi 1 & Flexbox: 4 istatistik kutusu (Zeka eklendi!) yan yana / ızgara düzeninde */}
      <View style={styles.istatistikSatir}>
        <StatKutusu deger={120} ad="Can" renk="#e11d48" />
        <StatKutusu deger={45} ad="Güç" renk="#d97706" />
        <StatKutusu deger={30} ad="Hız" renk="#16a34a" />
        {/* Ödevde istenen 4. istatistik: Zeka */}
        <StatKutusu deger={85} ad="Zeka" renk="#7c3aed" />
      </View>

      {/* Ek Bilgi / Hikaye Bölümü */}
      <View style={styles.hikayeKutusu}>
        <Text style={styles.hikayeBaslik}>📜 Karakter Hikayesi</Text>
        <Text style={styles.aciklama}>
          Kaan, kuzey dağlarından gelen cesur bir savaşçıdır. Kadim ejderha kristallerini korumak
          için eğitilmiş, kılıç ustalığı ve yüksek zekasıyla krallığın en saygın muhafızlarından
          biri olmuştur.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  icerik: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  profilKarti: {
    alignItems: 'center',
    backgroundColor: '#1e293b',
    width: '100%',
    padding: 24,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#38bdf8',
    marginBottom: 14,
  },
  isim: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  sinif: {
    fontSize: 15,
    color: '#94a3b8',
    marginTop: 4,
  },
  rozetler: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  rozet: {
    backgroundColor: '#334155',
    color: '#38bdf8',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
  },
  bolumBasligi: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#cbd5e1',
    alignSelf: 'flex-start',
    marginBottom: 12,
    marginLeft: 4,
  },
  istatistikSatir: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    gap: 8,
  },
  kutu: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1e293b',
    paddingVertical: 16,
    paddingHorizontal: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  kutuDeger: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  kutuAd: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 4,
    fontWeight: '500',
  },
  hikayeKutusu: {
    backgroundColor: '#1e293b',
    width: '100%',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  hikayeBaslik: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f1f5f9',
    marginBottom: 8,
  },
  aciklama: {
    fontSize: 14,
    lineHeight: 22,
    color: '#94a3b8',
  },
});
