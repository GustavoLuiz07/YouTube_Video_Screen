import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function YouTube() {
  return (
    <View style={styles.video_background}>

      <Image 
        style={styles.video}
        source={{ uri: "https://mixdeseries.com.br/wp-content/uploads/2022/01/the-big-bang-theory-1.jpg" }}
      />

      <Text style={styles.video_name}>The Big Bang Theory - Episode 500 - Full!</Text>

      <Text style={styles.video_views}>200 mi de visualizações - há 5 anos</Text>

      <TouchableOpacity style={styles.likebtn}>
        <Image style={styles.imagelike}
      source={{ uri: "https://www.kindpng.com/picc/m/11-114955_transparent-like-icon-png-youtube-like-button-svg.png" }}
      />
      </TouchableOpacity>

      <Text style={styles.liketxt}>200 mi</Text>

      <TouchableOpacity style={styles.deslikebtn}>
        <Image style={styles.imagedeslike}
      source={{ uri: "https://winston84.com/wp-content/uploads/YouTube-dislike-icon-400x400.jpg" }}
      />
      </TouchableOpacity>

      <Text style={styles.desliketxt}>Não gostei</Text>

      <TouchableOpacity style={styles.downloadebtn}>
        <Image style={styles.imagedownload}
          source={{ uri: "https://preview.pixlr.com/images/800wm/100/1/1001389312.jpg" }}
      />
      </TouchableOpacity>

      <Text style={styles.downloadtxt}>Download</Text>

      <Image 
        style={styles.channel_image}
        source={{ uri: "https://play-lh.googleusercontent.com/iO3BF5yQLOnXpchxWsC9Kor5aFPIFKy1MgFTxjFwu3Bo5mozIO_ZthyMcVEYLOdBUQ=s1200" }}
      />

      <Text style={styles.channel_name}>Nerd Stark</Text>

      <Text style={styles.channel_subs}>250 milhões inscritos</Text>

      <TouchableOpacity>
        <Text style={styles.channel_inscrever}>INSCREVER-SE</Text> 
      </TouchableOpacity>   

      <Text style={styles.comments}>Comentários</Text>
      <Text style={styles.comments_number}>71 mil</Text>

      <Image 
        style={styles.comments_image}
        source={{ uri: "https://mixdeseries.com.br/wp-content/uploads/2020/08/Jim-Parsons-Sheldon-The-Big-Bang-Theory.jpg" }}
      />

       <Text style={styles.comments_text}>Querem ver um fato interessante sobre escadas? Se a altura de um degrau for 2cm menor, a maioria das pessoas cai.</Text>

       <Image 
         style={styles.comments_image02}
         source={{ uri: "https://www.looper.com/img/gallery/the-best-time-amy-ever-broke-character-on-the-big-bang-theory/l-intro-1622259617.jpg" }}
      />

       <Text style={styles.comments_text02}>Sheldon, já conseguiu decidir entre XBox One e PS4?</Text>

       <Image 
         style={styles.comments_image03}
         source={{ uri: "https://i.pinimg.com/736x/bf/4b/06/bf4b06dbbb6726d62f9dc412d12371da.jpg" }}
      />

       <Text style={styles.comments_text03}>Isso que eu chamo de uma bem-sucedida pesquisa de campo biosocial com fundo neuroquímico!</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  video_background: {
    flex: 1,
    backgroundColor: "#1C1C1C"
  },
  video: {
    width: 333,
    height: 200
  },
  video_name: {
    fontSize: 14, 
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
    marginTop: 15
  },
  video_views: {
    fontSize: 12, 
    fontWeight: "lighter",
    color: "gray",
    marginLeft: 10,
    marginTop: 3
  },
  likebtn: {
    width: 20,
    height: 20
  },
  imagelike: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginLeft: 20,
    marginTop: 15
  },
  liketxt: {
    fontSize: 10, 
    fontWeight: "normal",
    color: "white",
    marginLeft: 16,
    marginTop: 23
  },
  deslikebtn: {
    width: 20,
    height: 20
  },
  imagedeslike: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginLeft: 80,
    marginTop: -41
  },
  desliketxt: {
    fontSize: 10, 
    fontWeight: "normal",
    color: "white",
    marginLeft: 65,
    marginTop: -34
  },
  downloadebtn: {
    width: 20,
    height: 20
  },
  imagedownload: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginLeft: 142,
    marginTop: -40
  },
  downloadtxt: {
    fontSize: 10, 
    fontWeight: "normal",
    color: "white",
    marginLeft: 132,
    marginTop: -34
  },
  channel_image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 20
  },
  channel_name: {
    fontSize: 13, 
    fontWeight: "bold",
    color: "white",
    marginLeft: 50,
    marginTop: -34
  },
  channel_subs: {
    fontSize: 12, 
    fontWeight: "lighter",
    color: "gray",
    marginLeft: 50,
    marginTop: 3
  },
  channel_inscrever: {
    fontSize: 13, 
    fontWeight: "bold",
    color: "red",
    marginLeft: 220,
    marginTop: -25
  },
  comments: {
    fontSize: 13, 
    fontWeight: "normal",
    color: "white",
    marginLeft: 10,
    marginTop: 10
  },
  comments_number: {
    fontSize: 13, 
    fontWeight: "lighter",
    color: "gray",
    marginLeft: 90,
    marginTop: -17
  },
  comments_image: {
    width: 27,
    height: 27,
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 10
  },
  comments_text: {
    fontSize: 11, 
    fontWeight: "normal",
    color: "white",
    marginLeft: 43,
    marginTop: -30
  },
  comments_image02: {
    width: 27,
    height: 27,
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 7
  },
  comments_text02: {
    fontSize: 11, 
    fontWeight: "normal",
    color: "white",
    marginLeft: 43,
    marginTop: -23
  },
  comments_image03: {
    width: 27,
    height: 27,
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 15
  },
  comments_text03: {
    fontSize: 11, 
    fontWeight: "normal",
    color: "white",
    marginLeft: 43,
    marginTop: -29
  }
})
