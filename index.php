<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Origin: http://localhost:3800');
header('Content-Type: application/json');
$popupContent = [
    [
        'title' => 'About the Book',
        'description' => 'This textbook attempts to provide a comprehensive overview of audiology at the introductory level; including such topics as acoustics, anatomy and physiology, sound perception, auditory disorders and the nature of hearing impairment, methods of measurement, screening, clinical assessment and clinical management. It is intended to serve as the core text for undergraduate students in speech, language and hearing, and might also serve the needs of beginning-level graduate students who need to learn or review the fundamentals of audiology. It is anticipated that the material will be covered in a one-, two- or three-term undergraduate sequence, depending on the organization of the communication sciences and disorders curriculum at a given college or university. - Publisher.'
    ],
    [
        'title' => 'Digital BOOK INDEX',
        'description' => 'Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free. Digital Book Index: provides links to more than 148,000 fulltext digital books from more than 180,000 commercial and non-commercial publishers, universities and various private sites. More than 120,000 of these books, texts, and documents are available free.'
    ],
    [
        'title' => 'OverDrive',
        'description' => 'Browse a large selection of e-books, audiobooks, and video, for use with a wide variety of e-readers, portable devices, PCs, and Macs.'
    ],
];

echo json_encode($popupContent[$_GET['id']]);
exit();
