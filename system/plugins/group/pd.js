module.exports = {
  command: "pd",
  alias: ["pd"],
  category: ["group"],
  settings: {
    group: true,
    admin: true,
  },
  description: "👑 Memberi notifikasi saat member di-promote/demote",
  loading: true,
  async run(m, { sock, text }) {
    if (!text || !["on", "off"].includes(text.toLowerCase()))
      throw `*– 乂 Cara Penggunaan:*\n
> *👑* Gunakan \`on\` untuk mengaktifkan notifikasi promote/demote\n
> *👑* Gunakan \`off\` untuk menonaktifkan notifikasi\n\n
*– 乂 Contoh Penggunaan:*\n
> *-* *${m.prefix + m.command} on* - Aktifkan notifikasi\n
> *-* *${m.prefix + m.command} off* - Matikan notifikasi\n\n
*– 乂 Penting!*\n
> *📌* Jika aktif, bot akan memberi selamat saat admin promote/demote member\n
> *📌* Jika nonaktif, bot tidak akan mengirim notifikasi apapun`;

    const groupId = m.cht;
    const status = text.toLowerCase() === "on";
    
    if (!db.list().group[groupId]) {
      db.list().group[groupId] = {};
    }
    db.list().group[groupId].promoteDemote = status;
    await db.save();
    
    await m.reply(
      `> ✅ *Berhasil ${status ? "mengaktifkan" : "menonaktifkan"} notifikasi promote/demote!*\n` +
      `${status ? "Bot akan memberi notifikasi saat ada promote/demote." : "Bot tidak akan memberi notifikasi promote/demote."}`
    );
  },
};