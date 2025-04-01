module.exports = {
  command: "porn",
  alias: [],
  category: ["owner"],
  settings: {
    owner: true,
  },
  description: "🔞 Ubah bot agar menjadi anti gambar/sticker porno",
  async run(m, { sock, text }) {
    if (!text)
      return m.reply({
        poll: {
          name: `*– 乂 Cara Penggunaan Fitur Anti Porno*\n\n> *\`0\`* - Untuk mematikan fitur anti porno (Bot tidak akan menghapus pesan yang mengandung porno)\n> *\`1\`* - Untuk menghidupkan fitur anti porno (Bot menghapus pesan yang mengandung porno)`,
          values: [`${m.prefix}porn 0`, `${m.prefix}porn 1`],
          selectableCount: 1,
        },
      });

    let settings = db.list().settings;
    settings.antiporn = parseInt(text) > 0 ? true : false;

    m.reply(
      `> ✅ Fitur *Anti Porno* berhasil ${text < 1 ? "dimatikan" : "diaktifkan"}. Bot akan ${text < 1 ? "tidak akan menghapus pesan yang mengandung porno" : "menghapus pesan yang mengandung porno"}.`,
    );
  },
};
