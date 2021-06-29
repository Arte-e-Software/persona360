USE [PSONLINE]
GO

/****** Object:  Table [dbo].[NODE_cpaResposta]    Script Date: 29/10/2019 17:33:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[PSONLINE_BOLSA_ENEM](
	[IdCanidatoBolsaEnem] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [int] NOT NULL,
	[Celular] [varchar](11) NOT NULL,
	[Email] [varchar](200) NOT NULL,
	[MediaEnem] [varchar](7) NOT NULL,
	[BolsaEnem] [varchar](6) NOT NULL,
	[Ano] [int] NOT NULL,
	[Semestre] [int] NOT NULL,
	[DataCad] [datetime] NOT NULL,
	[DataMatricula] [datetime] NULL
 CONSTRAINT [PK_PSONLINE_AGENDAMENTO_ENEM] PRIMARY KEY CLUSTERED 
(
	[IdCanidatoBolsaEnem] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

SELECT * FROM PSONLINE_BOLSA_ENEM