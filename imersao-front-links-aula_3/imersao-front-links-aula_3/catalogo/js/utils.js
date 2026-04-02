// Corrige para aceitar string ou array de links
export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8";

    // Se for array, retorna todos os IDs
    if (Array.isArray(url)) {
        return url.map(link => {
            if (link.includes('v=')) {
                return link.split('v=')[1].split('&')[0];
            }
            return link.split('/').pop();
        });
    }

    // Se for string única
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop();
}

// Gera um número aleatório de "match"
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Gera duração aleatória (séries ou filmes)
export function getRandomDuration(hasProgress) {
    return hasProgress
        ? '10 temporadas'
        : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

// Badge de idade aleatório
export function getRandomAgeBadge() {
    return Math.random() > 0.5
        ? { text: 'A16', class: 'red-accent' }
        : { text: '16', class: '' };
}
